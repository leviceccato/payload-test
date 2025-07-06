import type { CollectionConfig, CollectionAfterChangeHook } from 'payload'
import type { Release } from '@/payload-types'

export const Releases = {
  slug: 'releases',
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'releaseDateAndTime',
      type: 'date',
      timezone: true,
      admin: {
        description:
          "Once selected, all published content will be deployed on the given date and time. Leave empty if you don't want this release to deploy automatically.",
        date: {
          pickerAppearance: 'dayAndTime',
        },
      },
    },
    {
      name: 'deploy',
      type: 'ui',
      admin: {
        components: {
          Field: 'src/components/payload/Deploy.tsx',
        },
      },
    },
    {
      name: 'documentsToPublish',
      type: 'relationship',
      relationTo: 'pages',
      hasMany: true,
      unique: true,
      admin: {
        appearance: 'drawer',
        description:
          'Select documents to publish before this release. If you just want to release already published content, leave this empty. An error will occur if you try to add a document to multiple releases.',
      },
    },
  ],
  endpoints: [
    {
      path: '/:id/publish',
      method: 'post',
      handler: async (req) => {
        const release = await req.payload.findByID({
          collection: 'releases',
          id: req.routeParams!.id as string,
        })

        for (const document of release.documentsToPublish ?? []) {
          await req.payload.update({
            collection: 'pages',
            id: typeof document === 'number' ? document : document.id,
            data: {
              _status: 'published',
            },
          })
        }

        return Response.json({
          success: true,
        })
      },
    },
    {
      path: '/publish',
      method: 'post',
      handler: async (req) => {
        try {
          const releases = await req.payload.find({
            collection: 'releases',
            where: {
              releaseDateAndTime: {
                less_than_equal: new Date(),
              },
            },
          })

          for (const release of releases.docs) {
            for (const document of release.documentsToPublish ?? []) {
              await req.payload.update({
                collection: 'pages',
                id: typeof document === 'number' ? document : document.id,
                data: {
                  _status: 'published',
                },
              })
            }

            await req.payload.delete({
              collection: 'releases',
              id: release.id,
            })
          }

          const deployResponse = await fetch(process.env.VERCEL_DEPLOY_HOOK, {
            method: 'POST',
          })
          if (!deployResponse.ok) {
            throw new Error('Failed to deploy to Vercel', {
              cause: deployResponse,
            })
          }
        } catch (error) {
          return Response.json(
            {
              success: false,
              error: error instanceof Error ? error.message : 'Unknown error',
            },
            { status: 500 }
          )
        }

        return Response.json({
          success: true,
        })
      },
    },
    {
      path: '/deploy',
      method: 'post',
      handler: async (req) => {
        try {
          const response = await fetch(process.env.VERCEL_DEPLOY_HOOK, {
            method: 'POST',
          })
          if (!response.ok) {
            throw new Error('Failed to deploy to Vercel', {
              cause: response,
            })
          }

          const data = await response.json()

          return Response.json({
            success: true,
            data,
          })
        } catch (error) {
          return Response.json(
            {
              success: false,
              error: error instanceof Error ? error.message : 'Unknown error',
            },
            { status: 500 }
          )
        }
      },
    },
  ],
} as const satisfies CollectionConfig
