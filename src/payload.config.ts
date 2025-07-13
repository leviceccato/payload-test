import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { redirectsPlugin } from '@payloadcms/plugin-redirects'
import { searchPlugin } from '@payloadcms/plugin-search'
import { draftMode as getDraftMode } from 'next/headers'
import {
  lexicalEditor,
  BlocksFeature,
  EXPERIMENTAL_TableFeature,
} from '@payloadcms/richtext-lexical'
import path from 'node:path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'
import { Users } from '@/collections/Users'
import { Media } from '@/collections/Media'
import { Pages } from '@/collections/Pages'
import { Settings } from '@/globals/Settings'
import { Releases } from '@/collections/Releases'
import { generatedCollections } from '@/collections/__generated__/_index'
import { generatedGlobals } from '@/globals/__generated__/_index'
import { generatedBlocks } from '@/blocks/__generated__/_index'
import { getDatabaseName } from '@/utils/database'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  secret: process.env.PAYLOAD_SECRET,
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
  db: mongooseAdapter({
    url: `mongodb+srv://payload:${
      process.env.MONGODB_PASSWORD
    }@payload.glft1tr.mongodb.net/${getDatabaseName()}?retryWrites=true&w=majority&appName=payload`,
  }),
  folders: {
    browseByFolder: false,
  },
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
        media: {
          prefix: getDatabaseName(),
        },
      },
    }),
    redirectsPlugin({
      collections: [Pages.slug],
      redirectTypes: ['308', '307'],
    }),
    searchPlugin({
      collections: [Pages.slug],
      defaultPriorities: {
        pages: 100,
      },
    }),
  ],
  blocks: generatedBlocks,
  globals: [...generatedGlobals, Settings],
  collections: [...generatedCollections, Users, Media, Pages, Releases],
  endpoints: [
    {
      path: '/preview',
      method: 'get',
      handler: async (request) => {
        const path = request.searchParams.get('path')
        const secret = request.searchParams.get('secret')

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

        const draftMode = await getDraftMode()

        if (!request.user) {
          draftMode.disable()
          return notAllowedResponse
        }

        // You can add additional checks here to see if the user is allowed to preview this page

        draftMode.enable()

        return Response.redirect(`${request.protocol}//${request.host}/${path}`)
      },
    },
  ],
})
