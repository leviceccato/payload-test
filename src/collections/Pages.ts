import type { CollectionConfig } from 'payload'

export const Pages = {
  slug: 'pages',
  versions: {
    drafts: true,
  },
  fields: [
    {
      name: 'id',
      required: true,
      type: 'text',
      hooks: {
        beforeValidate: [
          ({ value }) => {
            return (
              value
                ?.toLowerCase()
                .replace(/[^a-z0-9]+/g, '-')
                .replace(/(^-|-$)/g, '') || ''
            )
          },
        ],
      },
    },
    {
      name: 'title',
      type: 'text',
    },
  ],
} as const satisfies CollectionConfig
