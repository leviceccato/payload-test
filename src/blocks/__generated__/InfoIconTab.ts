import type { Block } from "payload"


export const InfoIconTab = {
  slug: 'infoIconTab',
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
      name: "image",
      required: true,
      type: "upload",
      relationTo: "assets",
      filterOptions: {"mimeType":{"contains":["image"]}}
    },

    {
      name: "link",
      type: "text"
    },

    {
      name: "mobileButton",
      required: true,
      type: "text",
      defaultValue: "Learn more"
    }
  ]
} as const satisfies Block
