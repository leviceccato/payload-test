import type { CollectionConfig } from "payload"

export const GlobalInfoTextWithImages = {
  slug: 'globalInfoTextWithImages',
  
  fields: [
    
    {
      name: "infoTextWithImage",
      required: true,
      type: "blocks",
      blocks: [],
      blockReferences: ["infoTextWithImage"],
      minRows: 1,
      maxRows: 1
    }
  ]
} as const satisfies CollectionConfig
