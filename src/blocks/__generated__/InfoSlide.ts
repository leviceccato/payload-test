import type { Block } from "payload"


export const InfoSlide = {
  slug: 'infoSlide',
  admin: {
    disableBlockName: true,
  },
  fields: [
    
    {
      name: "cover",
      required: true,
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
      name: "subtitle",
      required: true,
      type: "textarea"
    },

    {
      name: "label",
      type: "text"
    },

    {
      name: "link",
      type: "text"
    }
  ]
} as const satisfies Block
