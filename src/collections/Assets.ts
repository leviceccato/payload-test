import type { CollectionConfig } from 'payload'
import { getDatabaseName } from '@/utils/database'

export const Assets = {
  slug: 'assets',
  folders: true,
  upload: {
    adminThumbnail: ({ doc }) => {
      return `https://gsti4renzefw2pst.public.blob.vercel-storage.com/${getDatabaseName()}/${doc.filename}`
    },
  },
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
