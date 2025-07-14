import type { CollectionConfig } from "payload"


export const GlobalInfoCarousels = {
  slug: 'globalInfoCarousels',
  
  fields: [
    
    {
      name: "infoCarousel",
      required: true,
      type: "blocks",
      blocks: [],
      blockReferences: ["infoCarousel"],
      minRows: 1,
      maxRows: 1
    }
  ]
} as const satisfies CollectionConfig
