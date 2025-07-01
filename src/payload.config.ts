import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob'
import { sqliteAdapter } from '@payloadcms/db-sqlite'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
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
  editor: lexicalEditor(),
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
          return `/${data.id}`
        }
        return `/${collectionConfig.slug}/${data.id}`
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
  jobs: {
    tasks: [
      {
        slug: 'processRelease',
        inputSchema: [
          {
            name: 'releaseId',
            type: 'text',
            required: true,
          },
        ],
        outputSchema: [],
        handler: async ({ input, req }) => {
          const release = await req.payload.findByID({
            collection: Releases.slug,
            id: input.releaseId,
          })

          await req.payload.update({
            collection: Pages.slug,
            where: {
              id: { in: release.documentsToPublish },
            },
            data: {
              _status: 'published',
            },
          })

          await req.payload.delete({
            collection: Releases.slug,
            id: release.id,
          })

          return {
            output: {},
          }
        },
      },
      {
        slug: 'processScheduledReleases',
        inputSchema: [],
        outputSchema: [
          // {
          //   name: 'totalFound',
          //   type: 'number',
          // },
          // {
          //   name: 'processed',
          //   type: 'number',
          // },
          // {
          //   name: 'errors',
          //   type: 'number',
          // },
          {
            name: 'processedAt',
            type: 'text',
          },
        ],
        handler: async ({ job, req }) => {
          const releaseResult = await req.payload.find({
            collection: Releases.slug,
            where: {
              and: [
                {
                  releaseDateAndTime: {
                    less_than_equal: new Date(),
                  },
                },
                {
                  releaseDateAndTime: {
                    exists: true,
                  },
                },
              ],
            },
          })

          for (const release of releaseResult.docs) {
            await req.payload.update({
              collection: Pages.slug,
              where: {
                id: { in: release.documentsToPublish },
              },
              data: {
                _status: 'published',
              },
            })

            await req.payload.delete({
              collection: Releases.slug,
              id: release.id,
            })
          }

          return {
            output: {
              processedAt: new Date().toISOString(),
            },
          }
        },
      },
    ],
  },
  globals: [Header],
  collections: [Users, Media, Pages, Releases],
})
