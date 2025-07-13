import type { CollectionConfig } from "payload"

export const ClientLogotype = {
  slug: 'clientLogotype',
  
  fields: [
    
    {
      name: "clientLogotypes",
      required: true,
      type: "blocks",
      blocks: [],
      blockReferences: ["clientLogotypes", "clientLogotypesCards"],
      minRows: 1,
      maxRows: 1
    }
  ]
} as const satisfies CollectionConfig
