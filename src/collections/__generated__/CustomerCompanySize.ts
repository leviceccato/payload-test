import type { CollectionConfig } from "payload"

export const CustomerCompanySize = {
  slug: 'customerCompanySize',
  
  fields: [
    
    {
      name: "name",
      required: true,
      type: "text"
    }
  ]
} as const satisfies CollectionConfig
