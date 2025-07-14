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
      editor: lexicalEditor({ features: () => [EXPERIMENTAL_TableFeature()], admin: { hideGutter: true, hideInsertParagraphAtEnd: true } }),
      admin: {"description":"This field displays as a table editor. Since Payload v3.47 doesn't include a dedicated table field type, we've configured a rich text field to only allow table content as a workaround. To create the table you will need to type \"/table\" in the editor."}
    }
  ]
} as const satisfies Block
