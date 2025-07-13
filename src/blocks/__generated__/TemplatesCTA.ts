import type { Block } from "payload"

export const TemplatesCTA = {
  slug: 'templatesCTA',
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
      name: "image",
      required: true,
      type: "upload",
      relationTo: "assets",
      filterOptions: {"mimeType":{"contains":["image"]}}
    },

    {
      name: "button",
      required: true,
      type: "blocks",
      blocks: [],
      blockReferences: ["button", "globalButtons"],
      minRows: 1,
      maxRows: 1
    }
  ]
} as const satisfies Block
