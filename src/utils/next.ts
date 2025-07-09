import 'server-only'
import type { Metadata } from 'next'
import type { FC, ReactNode } from 'react'

type Params = {
  [key: string]: string | string[] | undefined
}

type PageProps<TParams extends Params = {}> = {
  params: Promise<TParams>
  searchParams: Promise<Params>
}

export type NextPage<TParams extends Params = {}> = FC<PageProps<TParams>>

export type NextLayout = FC<{ children: ReactNode }>

export type NextIcon<TParams extends Params = {}> = (props: {
  params: TParams
}) => Promise<
  Blob | ArrayBuffer | ArrayBufferView | DataView | ReadableStream | Response
>

export type GenerateMetadata<TParams extends Params = {}> = (
  props: PageProps<TParams>,
  parent: Promise<Metadata>
) => Promise<Metadata>

export type GenerateStaticParams<TParams extends Params = {}> = () => Promise<
  TParams[]
>

/**
 * Next.js provides search parameters in it's own format with no means of
 * converting it to a standard URLSearchParams.
 */
export const createUrlSearchParams = (
  searchParams: Params
): URLSearchParams => {
  const urlSearchParams = new URLSearchParams()

  Object.entries(searchParams).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach((subValue) => {
        urlSearchParams.append(key, subValue)
      })
    } else if (typeof value === 'string') {
      urlSearchParams.set(key, value)
    }
  })

  return urlSearchParams
}
