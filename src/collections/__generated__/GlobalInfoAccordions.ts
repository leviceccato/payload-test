import type { CollectionConfig } from "payload"

export const GlobalInfoAccordions = {
  slug: 'globalInfoAccordions',
  
  fields: [
    
    {
      name: "infoAccordion",
      required: true,
      type: "blocks",
      blocks: [],
      blockReferences: ["infoAccordion"],
      minRows: 1,
      maxRows: 1
    }
  ]
} as const satisfies CollectionConfig
