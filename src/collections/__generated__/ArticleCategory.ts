import type { CollectionConfig } from "payload"

export const ArticleCategory = {
  slug: 'articleCategory',
  
  fields: [
    
    {
      name: "name",
      required: true,
      type: "text"
    }
  ]
} as const satisfies CollectionConfig
