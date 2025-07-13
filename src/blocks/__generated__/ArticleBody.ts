import type { Block } from "payload"

export const ArticleBody = {
  slug: 'articleBody',
  admin: {
    disableBlockName: true,
  },
  fields: [
    
    {
      name: "sideBar",
      required: true,
      type: "blocks",
      blocks: [],
      blockReferences: ["tableOfContent"],
      minRows: 1,
      maxRows: 1
    },

    {
      name: "body",
      required: true,
      type: "richText"
    }
  ]
} as const satisfies Block
