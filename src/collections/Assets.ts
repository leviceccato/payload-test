import type { CollectionConfig } from 'payload'

export const Assets = {
  slug: 'assets',
  folders: true,
  upload: true,
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
  ],
} as const satisfies CollectionConfig
