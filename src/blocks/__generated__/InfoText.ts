import type { Block } from "payload"

export const InfoText = {
  slug: 'infoText',
  admin: {
    disableBlockName: true,
  },
  fields: [
    
    {
      name: "text",
      required: true,
      type: "text"
    },

    {
      name: "icon",
      required: true,
      type: "upload",
      relationTo: "media",
      filterOptions: {"mimeType":{"contains":["image"]}}
    }
  ]
} as const satisfies Block
