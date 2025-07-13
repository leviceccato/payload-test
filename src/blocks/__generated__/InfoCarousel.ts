import type { Block } from "payload"

export const InfoCarousel = {
  slug: 'infoCarousel',
  admin: {
    disableBlockName: true,
  },
  fields: [
    
    {
      name: "slides",
      type: "blocks",
      blocks: [],
      blockReferences: ["infoCarouselSlide"]
    }
  ]
} as const satisfies Block
