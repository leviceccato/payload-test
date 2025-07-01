import type { CollectionConfig } from 'payload'

export const Pages = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
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
  ],
} as const satisfies CollectionConfig
