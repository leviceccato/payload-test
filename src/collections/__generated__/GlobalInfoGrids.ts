import type { CollectionConfig } from "payload"

export const GlobalInfoGrids = {
  slug: 'globalInfoGrids',
  
  fields: [
    
    {
      name: "grid",
      required: true,
      type: "blocks",
      blocks: [],
      blockReferences: ["infoGrid", "infoGridCardsWithIcons", "infoGridTwoColumnsWithTitle"],
      minRows: 1,
      maxRows: 1
    }
  ]
} as const satisfies CollectionConfig
