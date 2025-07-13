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
      relationTo: 'assets',
      filterOptions: {
        mimeType: { contains: 'image' },
      },
    },
  ],
} as const satisfies GlobalConfig
