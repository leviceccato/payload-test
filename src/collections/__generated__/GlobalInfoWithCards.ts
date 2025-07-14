import type { CollectionConfig } from "payload"


export const GlobalInfoWithCards = {
  slug: 'globalInfoWithCards',
  
  fields: [
    
    {
      name: "infoWithCards",
      required: true,
      type: "blocks",
      blocks: [],
      blockReferences: ["infoWithCards"],
      minRows: 1,
      maxRows: 1
    }
  ]
} as const satisfies CollectionConfig
