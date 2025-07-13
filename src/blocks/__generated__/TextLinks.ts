import type { Block } from "payload"

export const TextLinks = {
  slug: 'textLinks',
  admin: {
    disableBlockName: true,
  },
  fields: [
    
    {
      name: "links",
      type: "blocks",
      blocks: [],
      blockReferences: ["textLinkWithIcon"]
    }
  ]
} as const satisfies Block
