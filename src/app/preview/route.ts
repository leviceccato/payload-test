import type { NextRequest } from 'next/server'
import { getPayload } from 'payload'
import { draftMode } from 'next/headers'
import { redirect } from 'next/navigation'
import config from '@/payload.config'

export async function GET(request: NextRequest): Promise<Response> {
  const payload = await getPayload({ config })

  const url = new URL(request.url)

  const path = url.searchParams.get('path')
  const secret = url.searchParams.get('secret')

  if (secret !== process.env.PREVIEW_SECRET) {
    return new Response('You are not allowed to preview this page', {
      status: 403,
    })
  }

  if (!path) {
    return new Response('Insufficient search params', { status: 404 })
  }

  const draft = await draftMode()
  draft.enable()

  redirect(path)
}
