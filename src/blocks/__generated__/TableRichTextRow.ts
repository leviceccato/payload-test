import type { Block } from "payload"


export const TableRichTextRow = {
  slug: 'tableRichTextRow',
  admin: {
    disableBlockName: true,
  },
  fields: [
    
    {
      name: "tableRichTextCell",
      type: "blocks",
      blocks: [],
      blockReferences: ["tableRichTextCell"],
      minRows: 1
    }
  ]
} as const satisfies Block
