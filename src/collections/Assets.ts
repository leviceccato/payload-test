import type { CollectionConfig } from 'payload'
import { getDatabaseName } from '@/utils/database'

export const Assets = {
  slug: 'assets',
  folders: true,
  upload: {
    adminThumbnail: ({ doc }) => {
      if (typeof doc.filename !== 'string') {
        return null
      }

      const filenameSegments = doc.filename.split('.')
      const extension = filenameSegments.pop()
      const filename = filenameSegments.join('.')
    
      return `https://gsti4renzefw2pst.public.blob.vercel-storage.com/${getDatabaseName()}/${filename}-100x100.${extension}`
    },
    imageSizes: [
      {
        name: 'admin',
        fit: 'contain',
        width: 100,
        height: 100,
      },
    ],
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
