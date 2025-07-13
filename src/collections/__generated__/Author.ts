import type { CollectionConfig } from "payload"

export const Author = {
  slug: 'author',
  
  fields: [
    
    {
      name: "name",
      required: true,
      type: "text"
    },

    {
      name: "position",
      required: true,
      type: "text"
    },

    {
      name: "image",
      required: true,
      type: "upload",
      relationTo: "media",
      filterOptions: {"mimeType":{"contains":["image"]}}
    },

    {
      name: "description",
      type: "text"
    },

    {
      name: "socialMediaLinks",
      type: "blocks",
      blocks: [],
      blockReferences: ["socialMedia"]
    }
  ]
} as const satisfies CollectionConfig
