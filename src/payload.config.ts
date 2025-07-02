import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob'
import { sqliteAdapter } from '@payloadcms/db-sqlite'
import { draftMode } from 'next/headers'
import {
  lexicalEditor,
  BlocksFeature,
  EXPERIMENTAL_TableFeature,
} from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'
import type { Config } from '@/payload-types'
import { Users } from '@/collections/Users'
import { Media } from '@/collections/Media'
import { Pages } from '@/collections/Pages'
import { Header } from '@/globals/Header'
import { Releases } from '@/collections/Releases'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  secret: process.env.PAYLOAD_SECRET ?? '',
  editor: lexicalEditor({
    features: ({ defaultFeatures }) => [
      ...defaultFeatures,
      EXPERIMENTAL_TableFeature(),
      BlocksFeature({
        blocks: [
          {
            slug: 'CustomBlock',
            admin: {
              disableBlockName: true,
            },
            fields: [],
          },
        ],
      }),
    ],
  }),
  sharp,
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: sqliteAdapter({
    client: {
      authToken: process.env.TURSO_AUTH_TOKEN,
      url: process.env.TURSO_DATABASE_URL ?? '',
    },
  }),
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  plugins: [
    vercelBlobStorage({
      token: process.env.BLOB_READ_WRITE_TOKEN,
      collections: {
        media: true,
      },
    }),
  ],
  globals: [Header],
  collections: [Users, Media, Pages, Releases],
  endpoints: [
    {
      path: '/preview',
      method: 'get',
      handler: async (request) => {
        const url = new URL(request.url!)

        const path = url.searchParams.get('path')
        const secret = url.searchParams.get('secret')

        const notAllowedResponse = new Response(
          'You are not allowed to preview this page',
          {
            status: 403,
          }
        )

        if (secret !== process.env.PREVIEW_SECRET) {
          return notAllowedResponse
        }

        if (!path) {
          return new Response('Insufficient search params', { status: 404 })
        }

        let userAuth: Awaited<ReturnType<typeof request.payload.auth>>

        try {
          userAuth = await request.payload.auth({
            req: request,
            headers: request.headers,
          })
        } catch (error) {
          request.payload.logger.error(
            { err: error },
            'Error verifying token for live preview'
          )
          return notAllowedResponse
        }

        console.log('user', userAuth)

        const draft = await draftMode()

        if (!userAuth.user) {
          draft.disable()
          return notAllowedResponse
        }

        // You can add additional checks here to see if the user is allowed to preview this page

        draft.enable()

        return Response.redirect(`${request.protocol}//${request.host}/${path}`)
      },
    },
  ],
})
