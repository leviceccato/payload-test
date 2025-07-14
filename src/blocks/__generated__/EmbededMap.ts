import type { Block } from "payload"


export const EmbededMap = {
  slug: 'embededMap',
  admin: {
    disableBlockName: true,
  },
  fields: [
    
    {
      name: "address",
      required: true,
      type: "text"
    },

    {
      name: "icon",
      type: "upload",
      relationTo: "assets",
      filterOptions: {"mimeType":{"contains":["image"]}}
    },

    {
      name: "embed",
      required: true,
      admin: {"description":"Property width and height for embeded element must be set to 100%"},
      type: "textarea"
    }
  ]
} as const satisfies Block
