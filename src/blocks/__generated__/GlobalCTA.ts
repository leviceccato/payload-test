import type { Block } from "payload"


export const GlobalCTA = {
  slug: 'globalCTA',
  admin: {
    disableBlockName: true,
  },
  fields: [
    
    {
      name: "Call To Action",
      required: true,
      hasMany: false,
      type: "relationship",
      relationTo: ["callToAction"]
    }
  ]
} as const satisfies Block
