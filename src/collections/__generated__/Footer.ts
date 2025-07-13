import type { CollectionConfig } from "payload"

export const Footer = {
  slug: 'footer',
  
  fields: [
    
    {
      name: "logotype",
      required: true,
      type: "upload",
      relationTo: "assets",
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
      relationTo: "assets",
      hasMany: true,
      filterOptions: {"mimeType":{"contains":["image"]}}
    }
  ]
} as const satisfies CollectionConfig
