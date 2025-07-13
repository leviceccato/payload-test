import type { Block } from "payload"

export const TableRichTextCell = {
  slug: 'tableRichTextCell',
  admin: {
    disableBlockName: true,
  },
  fields: [
    
    {
      name: "body",
      required: true,
      type: "richText"
    }
  ]
} as const satisfies Block
