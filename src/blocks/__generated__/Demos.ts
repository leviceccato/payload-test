import type { Block } from "payload"

export const Demos = {
  slug: 'demos',
  admin: {
    disableBlockName: true,
  },
  fields: [
    
    {
      name: "demos",
      type: "blocks",
      blocks: [],
      blockReferences: ["demo"],
      maxRows: 4
    }
  ]
} as const satisfies Block
