import type { Block } from "payload"

export const GlobalInfoCarousel = {
  slug: 'globalInfoCarousel',
  admin: {
    disableBlockName: true,
  },
  fields: [
    
    {
      name: "infoCarousel",
      required: true,
      hasMany: false,
      type: "relationship",
      relationTo: ["globalInfoCarousels"]
    }
  ]
} as const satisfies Block
