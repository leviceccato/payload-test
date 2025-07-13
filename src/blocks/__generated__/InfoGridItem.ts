import type { Block } from "payload"

export const InfoGridItem = {
  slug: 'infoGridItem',
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
      type: "textarea"
    },

    {
      name: "icon",
      required: true,
      type: "upload",
      relationTo: "assets",
      filterOptions: {"mimeType":{"contains":["image"]}}
    }
  ]
} as const satisfies Block
