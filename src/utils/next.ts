import 'server-only'
import type { Metadata } from 'next'
import type { FC } from 'react'

type Params = {
  [key: string]: string | string[] | undefined
}

type PageProps<TParams extends Params = {}> = {
  params: Promise<TParams>
  searchParams: Promise<Params>
}

export type NextPage<TParams extends Params = {}> = FC<PageProps<TParams>>

export type GenerateMetadata<TParams extends Params = {}> = (
  props: PageProps<TParams>
) => Promise<Metadata>

export type GenerateStaticParams<TParams extends Params> = () => Promise<
  TParams[]
>

/**
 * Next.js provides search parameters in it's own format with no means of
 * converting it to a standard URLSearchParams.
 */
export const createUrlSearchParams = (params: Params): URLSearchParams => {
  const searchParams = new URLSearchParams()

  Object.entries(params).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach((subValue) => {
        searchParams.append(key, subValue)
      })
    } else if (typeof value === 'string') {
      searchParams.set(key, value)
    }
  })

  return searchParams
}
