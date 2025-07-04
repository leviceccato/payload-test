import 'server-only'
import {
  getPayload as getPayloadOriginal,
  type TransformCollectionWithSelect,
  type BasePayload,
  type CollectionSlug,
  type DataFromCollectionSlug,
} from 'payload'
import config from '@/payload.config'
import { draftMode as getDraftMode } from 'next/headers'
import { notFound } from 'next/navigation'
import { cache } from 'react'

type CollectionSlugsWithSlug = {
  [TKey in CollectionSlug]: DataFromCollectionSlug<TKey> extends {
    slug: string
  }
    ? TKey
    : never
}[CollectionSlug]

export async function getPayload(): Promise<BasePayload> {
  return await getPayloadOriginal({ config })
}

export async function findSlugs<TSlug extends CollectionSlugsWithSlug>(
  collection: TSlug,
  options?: {
    payload?: BasePayload
  }
): Promise<{ slug: string }[]> {
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
export const findBySlug = cache(async function <
  TSlug extends CollectionSlugsWithSlug,
>(
  collection: TSlug,
  slug: string,
  options?: {
    payload?: BasePayload
  }
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
