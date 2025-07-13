import {
  getPayload as getPayloadOriginal,
  type TransformCollectionWithSelect,
  type BasePayload,
  type CollectionSlug,
  type DataFromCollectionSlug,
  type PaginatedDocs,
  TransformGlobalWithSelect,
  GlobalSlug,
} from 'payload'
import payloadConfig from '@/payload.config'
import { draftMode as getDraftMode } from 'next/headers'
import { notFound } from 'next/navigation'
import { cache } from 'react'
import type { Media } from '@/payload-types'

type CollectionSlugsWithSlug = {
  [TKey in CollectionSlug]: DataFromCollectionSlug<TKey> extends {
    slug: string
  }
    ? TKey
    : never
}[CollectionSlug]

type Options = {
  payload?: BasePayload
}

export async function getPayload(): Promise<BasePayload> {
  return await getPayloadOriginal({ config: payloadConfig })
}

export async function getParamsByCollection<
  TSlug extends CollectionSlugsWithSlug,
>(collection: TSlug, options?: Options): Promise<{ slug: string }[]> {
  const payload = options?.payload ?? (await getPayload())

  const result = await payload.find({
    collection: collection,
    where: {
      slug: {
        exists: true,
      },
    },
  })

  return result.docs.map((doc) => ({ slug: doc.slug }))
}

/**
 * We are caching this function because it is often called twice in a page.
 * `cache` works across a single request.
 */
export const getDocBySlug = cache(async function <
  TSlug extends CollectionSlugsWithSlug,
>(
  collection: TSlug,
  slug: string,
  options?: Options
): Promise<TransformCollectionWithSelect<TSlug, any>> {
  const payload = options?.payload ?? (await getPayload())
  const draftMode = await getDraftMode()

  const result = await payload.find({
    collection: collection,
    limit: 1,
    draft: draftMode.isEnabled,
    where: {
      slug: {
        equals: slug,
      },
    },
  })

  const doc = result.docs[0]
  if (!doc) {
    notFound()
  }

  return doc
})

export async function getDocs<TSlug extends CollectionSlug>(
  collection: TSlug,
  options?: Options
): Promise<PaginatedDocs<DataFromCollectionSlug<TSlug>>> {
  const payload = options?.payload ?? (await getPayload())
  const draftMode = await getDraftMode()

  return payload.find({
    collection,
    draft: draftMode.isEnabled,
  })
}

export async function getGlobal<TSlug extends GlobalSlug>(
  slug: TSlug,
  options?: Options
): Promise<TransformGlobalWithSelect<TSlug, any>> {
  const payload = options?.payload ?? (await getPayload())
  const draftMode = await getDraftMode()

  return payload.findGlobal({
    slug,
    draft: draftMode.isEnabled,
  })
}

type NormalisedMedia = {
  [TKey in keyof Media]: NonNullable<Media[TKey]>
}

/**
 * The image (media) fields from payload are a bit loose by default and
 * don't play nice with Next.js.
 */
export function normaliseMedia(
  media: number | Media | null | undefined
): NormalisedMedia | null {
  if (!media || typeof media === 'number') {
    return null
  }

  return {
    ...media,
    url: media.url ?? undefined,
    thumbnailURL: media.thumbnailURL ?? undefined,
    filename: media.filename ?? undefined,
    mimeType: media.mimeType ?? undefined,
    filesize: media.filesize ?? undefined,
    width: media.width ?? undefined,
    height: media.height ?? undefined,
    focalX: media.focalX ?? undefined,
    focalY: media.focalY ?? undefined,
  }
}
