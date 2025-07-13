import type { Block } from "payload"

export const GlobalCTA = {
  slug: 'globalCTA',
  admin: {
    disableBlockName: true,
  },
  fields: [
    
    {
      name: "cta",
      required: true,
      hasMany: false,
      type: "relationship",
      relationTo: ["callToAction"]
    }
  ]
} as const satisfies Block
