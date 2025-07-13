import type { CollectionConfig } from "payload"

export const GlobalButton = {
  slug: 'globalButton',
  
  fields: [
    
    {
      name: "button",
      required: true,
      type: "blocks",
      blocks: [],
      blockReferences: ["button"],
      minRows: 1,
      maxRows: 1
    }
  ]
} as const satisfies CollectionConfig
