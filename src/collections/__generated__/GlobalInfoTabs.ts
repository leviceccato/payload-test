import type { CollectionConfig } from "payload"

export const GlobalInfoTabs = {
  slug: 'globalInfoTabs',
  
  fields: [
    
    {
      name: "infoTabs",
      required: true,
      type: "blocks",
      blocks: [],
      blockReferences: ["infoTabsWithDescriptions", "infoTabsWithIcon"],
      minRows: 1,
      maxRows: 1
    }
  ]
} as const satisfies CollectionConfig
