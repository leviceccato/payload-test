import type { Block } from "payload"

export const Platform = {
  slug: 'platform',
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
      required: true,
      type: "text"
    },

    {
      name: "link",
      required: true,
      type: "text"
    },

    {
      name: "image",
      type: "upload",
      relationTo: "assets"
    },

    {
      name: "imageSm",
      required: true,
      type: "upload",
      relationTo: "assets"
    }
  ]
} as const satisfies Block
