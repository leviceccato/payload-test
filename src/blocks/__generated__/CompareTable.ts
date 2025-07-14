import type { Block } from "payload"


export const CompareTable = {
  slug: 'compareTable',
  admin: {
    disableBlockName: true,
  },
  fields: [
    
    {
      name: "headerRow",
      type: "blocks",
      blocks: [],
      blockReferences: ["compareTableRow"],
      minRows: 1,
      maxRows: 1
    },

    {
      name: "subtables",
      required: true,
      type: "blocks",
      blocks: [],
      blockReferences: ["compareTableSubtable"],
      minRows: 1
    }
  ]
} as const satisfies Block
