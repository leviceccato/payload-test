import type { Block } from "payload"


export const GlobalInfoTextWithImage = {
  slug: 'globalInfoTextWithImage',
  admin: {
    disableBlockName: true,
  },
  fields: [
    
    {
      name: "infoTextWithImage",
      required: true,
      hasMany: false,
      type: "relationship",
      relationTo: ["globalInfoTextWithImages"]
    }
  ]
} as const satisfies Block
