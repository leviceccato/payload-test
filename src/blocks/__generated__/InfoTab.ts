import type { Block } from "payload"


export const InfoTab = {
  slug: 'infoTab',
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
      name: "description",
      required: true,
      type: "textarea"
    },

    {
      name: "image",
      required: true,
      type: "upload",
      relationTo: "assets"
    }
  ]
} as const satisfies Block
