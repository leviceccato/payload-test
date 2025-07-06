import type { GlobalConfig } from 'payload'

export const Settings = {
  slug: 'settings',
  fields: [
    {
      name: 'defaultTitle',
      type: 'text',
    },
    {
      name: 'titleTemplate',
      type: 'text',
    },
    {
      name: 'favicon',
      type: 'upload',
      relationTo: 'media',
      filterOptions: {
        mimeType: { contains: 'image' },
      },
    },
  ],
} as const satisfies GlobalConfig
