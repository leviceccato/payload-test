import type { Block } from "payload"
import { EXPERIMENTAL_TableFeature, lexicalEditor } from "@payloadcms/richtext-lexical"

export const Table = {
  slug: 'table',
  admin: {
    disableBlockName: true,
  },
  fields: [
    
    {
      name: "tableData",
      type: "richText",
      editor: lexicalEditor({ features: () => [EXPERIMENTAL_TableFeature()], admin: { hideGutter: true, hideInsertParagraphAtEnd: true } })
    }
  ]
} as const satisfies Block
