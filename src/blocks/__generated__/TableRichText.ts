import type { Block } from "payload"


export const TableRichText = {
  slug: 'tableRichText',
  admin: {
    disableBlockName: true,
  },
  fields: [
    
    {
      name: "tableRows",
      type: "blocks",
      blocks: [],
      blockReferences: ["tableRichTextRow"]
    }
  ]
} as const satisfies Block
