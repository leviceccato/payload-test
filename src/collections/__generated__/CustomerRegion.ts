import type { CollectionConfig } from "payload"

export const CustomerRegion = {
  slug: 'customerRegion',
  
  fields: [
    
    {
      name: "name",
      required: true,
      type: "text"
    }
  ]
} as const satisfies CollectionConfig
