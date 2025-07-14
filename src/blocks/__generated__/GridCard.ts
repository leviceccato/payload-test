import type { Block } from "payload"


export const GridCard = {
  slug: 'gridCard',
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
      name: "body",
      required: true,
      type: "textarea"
    },

    {
      name: "fullWidthImage",
      type: "checkbox"
    },

    {
      name: "image",
      required: true,
      type: "upload",
      relationTo: "assets"
    },

    {
      name: "textLink",
      type: "blocks",
      blocks: [],
      blockReferences: ["textLinkButton"],
      maxRows: 1
    }
  ]
} as const satisfies Block
