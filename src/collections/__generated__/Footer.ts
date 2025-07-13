import type { CollectionConfig } from "payload"

export const Footer = {
  slug: 'footer',
  
  fields: [
    
    {
      name: "logotype",
      required: true,
      type: "upload",
      relationTo: "media",
      filterOptions: {"mimeType":{"contains":["image"]}}
    },

    {
      name: "groups",
      type: "blocks",
      blocks: [],
      blockReferences: ["footerLinksGroup"],
      maxRows: 4
    },

    {
      name: "socialMedia",
      type: "blocks",
      blocks: [],
      blockReferences: ["socialMedia"]
    },

    {
      name: "imagePlaceholders",
      type: "upload",
      relationTo: "media",
      hasMany: true,
      filterOptions: {"mimeType":{"contains":["image"]}}
    }
  ]
} as const satisfies CollectionConfig
