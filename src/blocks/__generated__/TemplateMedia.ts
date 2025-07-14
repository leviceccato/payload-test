import type { Block } from "payload"


export const TemplateMedia = {
  slug: 'templateMedia',
  admin: {
    disableBlockName: true,
  },
  fields: [
    
    {
      name: "media",
      type: "upload",
      relationTo: "assets",
      filterOptions: {"mimeType":{"contains":["video","image"]}}
    },

    {
      name: "mediaLink",
      type: "text"
    },

    {
      name: "mediaLinkLabel",
      type: "text"
    },

    {
      name: "embeded",
      type: "textarea"
    },

    {
      name: "caption",
      type: "text"
    }
  ]
} as const satisfies Block
