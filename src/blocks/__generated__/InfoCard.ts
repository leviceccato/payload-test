import type { Block } from "payload"


export const InfoCard = {
  slug: 'infoCard',
  admin: {
    disableBlockName: true,
  },
  fields: [
    
    {
      name: "image",
      required: true,
      type: "upload",
      relationTo: "assets",
      filterOptions: {"mimeType":{"contains":["image","video"]}}
    },

    {
      name: "mobileImage",
      type: "upload",
      relationTo: "assets",
      filterOptions: {"mimeType":{"contains":["image","video"]}}
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
      name: "textLink",
      required: true,
      type: "blocks",
      blocks: [],
      blockReferences: ["textLinkButton"],
      minRows: 1,
      maxRows: 1
    }
  ]
} as const satisfies Block
