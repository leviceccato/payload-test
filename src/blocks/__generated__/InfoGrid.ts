import type { Block } from "payload"

export const InfoGrid = {
  slug: 'infoGrid',
  admin: {
    disableBlockName: true,
  },
  fields: [
    
    {
      name: "items",
      required: true,
      type: "blocks",
      blocks: [],
      blockReferences: ["infoGridItem"],
      minRows: 1
    }
  ]
} as const satisfies Block
