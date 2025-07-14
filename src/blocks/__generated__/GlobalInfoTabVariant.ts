import type { Block } from "payload"


export const GlobalInfoTabVariant = {
  slug: 'globalInfoTabVariant',
  admin: {
    disableBlockName: true,
  },
  fields: [
    
    {
      name: "infoTab",
      required: true,
      hasMany: false,
      type: "relationship",
      relationTo: ["globalInfoTabs"]
    }
  ]
} as const satisfies Block
