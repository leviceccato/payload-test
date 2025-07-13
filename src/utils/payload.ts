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
import type { Asset } from '@/payload-types'

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
  TSlug extends CollectionSlugsWithSlug
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
  TSlug extends CollectionSlugsWithSlug
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

type NormalisedAsset = {
  [TKey in keyof Asset]: NonNullable<Asset[TKey]>
}

/**
 * The image (media) fields from payload are a bit loose by default and
 * don't play nice with Next.js.
 */
export function normaliseAsset(
  asset: string | Asset | null | undefined
): NormalisedAsset | null {
  if (!asset || typeof asset === 'string') {
    return null
  }

  return {
    ...asset,
    url: asset.url ?? undefined,
    prefix: asset.prefix ?? undefined,
    folder: asset.folder ?? undefined,
    thumbnailURL: asset.thumbnailURL ?? undefined,
    filename: asset.filename ?? undefined,
    mimeType: asset.mimeType ?? undefined,
    filesize: asset.filesize ?? undefined,
    width: asset.width ?? undefined,
    height: asset.height ?? undefined,
    focalX: asset.focalX ?? undefined,
    focalY: asset.focalY ?? undefined,
  }
}
