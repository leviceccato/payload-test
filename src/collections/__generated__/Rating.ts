import type { CollectionConfig } from "payload"

export const Rating = {
  slug: 'rating',
  
  fields: [
    
    {
      name: "rating",
      type: "number"
    }
  ]
} as const satisfies CollectionConfig
