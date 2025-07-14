import type { CollectionConfig } from "payload"


export const Rating = {
  slug: 'rating',
  
  fields: [
    
    {
      name: "rating",
      type: "number",
      min: 0,
      max: 5,
      admin: {"step":0.1}
    }
  ]
} as const satisfies CollectionConfig
