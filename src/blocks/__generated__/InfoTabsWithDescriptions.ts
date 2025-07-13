import type { Block } from "payload"

export const InfoTabsWithDescriptions = {
  slug: 'infoTabsWithDescriptions',
  admin: {
    disableBlockName: true,
  },
  fields: [
    
    {
      name: "title",
      type: "text"
    },

    {
      name: "subtitle",
      type: "textarea"
    },

    {
      name: "tabs",
      required: true,
      type: "blocks",
      blocks: [],
      blockReferences: ["infoTab"]
    }
  ]
} as const satisfies Block
