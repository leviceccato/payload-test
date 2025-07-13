import type { Block } from "payload"

export const TemplateInfoGridColumn = {
  slug: 'templateInfoGridColumn',
  admin: {
    disableBlockName: true,
  },
  fields: [
    
    {
      name: "icon",
      required: true,
      type: "upload",
      relationTo: "media",
      filterOptions: {"mimeType":{"contains":["image"]}}
    },

    {
      name: "title",
      required: true,
      type: "text"
    },

    {
      name: "body",
      required: true,
      type: "textarea"
    }
  ]
} as const satisfies Block
