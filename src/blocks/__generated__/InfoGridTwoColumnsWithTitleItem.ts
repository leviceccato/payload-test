import type { Block } from "payload"

export const InfoGridTwoColumnsWithTitleItem = {
  slug: 'infoGridTwoColumnsWithTitleItem',
  admin: {
    disableBlockName: true,
  },
  fields: [
    
    {
      name: "icon",
      type: "upload",
      relationTo: "assets",
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
