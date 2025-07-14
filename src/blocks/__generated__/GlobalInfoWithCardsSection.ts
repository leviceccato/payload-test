import type { Block } from "payload"


export const GlobalInfoWithCardsSection = {
  slug: 'globalInfoWithCardsSection',
  admin: {
    disableBlockName: true,
  },
  fields: [
    
    {
      name: "infoWithCards",
      required: true,
      hasMany: false,
      type: "relationship",
      relationTo: ["globalInfoWithCards"]
    }
  ]
} as const satisfies Block
