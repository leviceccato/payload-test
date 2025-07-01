import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob'
import { sqliteAdapter } from '@payloadcms/db-sqlite'
import {
  lexicalEditor,
  BlocksFeature,
  EXPERIMENTAL_TableFeature,
} from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig, type TaskConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'
import type { Config } from './payload-types'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Pages } from './collections/Pages'
import { Header } from './globals/Header'
import { Releases } from './collections/Releases'

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
    livePreview: {
      url: ({ collectionConfig, data }) => {
        if (!collectionConfig?.slug) {
          return `/${data.slug}`
        }
        return `/${collectionConfig.slug}/${data.slug}`
      },
      collections: [Pages.slug],
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
})
