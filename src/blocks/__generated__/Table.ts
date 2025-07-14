import type { Block } from "payload"


export const Table = {
  slug: 'table',
  admin: {
    disableBlockName: true,
  },
  fields: [
    
    {
      // TODO: Table: consider custom implementation
name: "tableData",
      type: "json"
    }
  ]
} as const satisfies Block
