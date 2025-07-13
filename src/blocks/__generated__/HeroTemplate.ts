import type { Block } from "payload"

export const HeroTemplate = {
  slug: 'heroTemplate',
  admin: {
    disableBlockName: true,
  },
  fields: [
    
    {
      name: "title",
      required: true,
      type: "text"
    },

    {
      name: "subtitle",
      required: true,
      type: "textarea"
    },

    {
      name: "cover",
      type: "upload",
      relationTo: "media",
      filterOptions: {"mimeType":{"contains":["image"]}}
    },

    {
      name: "button",
      type: "blocks",
      blocks: [],
      blockReferences: ["button", "globalButtons"],
      maxRows: 1
    }
  ]
} as const satisfies Block
