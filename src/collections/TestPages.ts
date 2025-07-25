import type { CollectionConfig } from 'payload'

const slug = 'test-pages'

export const TestPages = {
  slug,
  admin: {
    useAsTitle: 'title',
    livePreview: {
      url: ({ data }) => {
        const params = new URLSearchParams({
          path: `${slug}/${data.slug}`,
          secret: process.env.PREVIEW_SECRET,
        })

        return `/api/preview?${params.toString()}`
      },
    },
    preview: (doc, options) => {
      const params = new URLSearchParams({
        path: `${slug}/${doc.slug}`,
        secret: process.env.PREVIEW_SECRET,
      })

      return `${options.req.protocol}//${
        options.req.host
      }/api/preview?${params.toString()}`
    },
  },
  versions: {
    drafts: {
      autosave: true,
    },
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      index: true,
    },
    {
      name: 'release',
      type: 'join',
      collection: 'releases',
      on: 'documentsToPublish',
      admin: {
        defaultColumns: ['name', 'releaseDateAndTime', 'documentsToPublish'],
        description:
          'Optionally assign this page to a release. Releases allow you to schedule the publishing of pages in bulk',
      },
    },
    {
      name: 'content',
      type: 'blocks',
      blocks: [
        {
          slug: 'Heading',
          admin: {
            disableBlockName: true,
          },
          fields: [
            {
              name: 'heading',
              type: 'text',
            },
          ],
        },
        {
          slug: 'Rich Text',
          admin: {
            disableBlockName: true,
          },
          fields: [
            {
              name: 'richText',
              type: 'richText',
            },
          ],
        },
      ],
    },
  ],
} as const satisfies CollectionConfig
