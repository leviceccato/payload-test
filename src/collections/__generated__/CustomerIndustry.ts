import type { CollectionConfig } from "payload"


export const CustomerIndustry = {
  slug: 'customerIndustry',
  
  fields: [
    
    {
      name: "name",
      required: true,
      type: "text"
    }
  ]
} as const satisfies CollectionConfig
