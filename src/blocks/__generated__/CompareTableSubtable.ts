import type { Block } from "payload"


export const CompareTableSubtable = {
  slug: 'compareTableSubtable',
  admin: {
    disableBlockName: true,
  },
  fields: [
    
    {
      name: "heading",
      type: "text"
    },

    {
      name: "tableRows",
      type: "blocks",
      blocks: [],
      blockReferences: ["compareTableRow"],
      minRows: 1
    }
  ]
} as const satisfies Block
