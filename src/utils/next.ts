import 'server-only'
import type { Metadata } from 'next'
import type { FC } from 'react'
import type { ObjectFromKeys } from '@/utils/misc'

type Params = {
  [key: string]: string | string[] | undefined
}

type PageProps<TParamKeys extends readonly string[] = []> = {
  params: TParamKeys extends readonly []
    ? Promise<{}>
    : Promise<ObjectFromKeys<TParamKeys, string>>
  searchParams: Promise<Params>
}

export type NextPage<TParamKeys extends readonly string[] = []> = FC<
  PageProps<TParamKeys>
>

export type GenerateMetadata<TParamKeys extends readonly string[] = []> = (
  props: PageProps<TParamKeys>
) => Promise<Metadata>

export type GenerateStaticParams<TParamKeys extends readonly string[]> =
  () => Promise<ObjectFromKeys<TParamKeys, string>[]>

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
