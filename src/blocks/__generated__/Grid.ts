import type { Block } from "payload"

export const Grid = {
  slug: 'grid',
  admin: {
    disableBlockName: true,
  },
  fields: [
    
    {
      name: "items",
      type: "blocks",
      blocks: [],
      blockReferences: ["richText"]
    }
  ]
} as const satisfies Block
