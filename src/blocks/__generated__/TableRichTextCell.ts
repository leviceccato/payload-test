import type { Block } from "payload"
import { lexicalEditor, BlocksFeature } from "@payloadcms/richtext-lexical"

export const TableRichTextCell = {
  slug: 'tableRichTextCell',
  admin: {
    disableBlockName: true,
  },
  fields: [
    
    {
      name: "body",
      required: true,
      type: "richText",
      editor: lexicalEditor({ features: ({ rootFeatures }) => [...rootFeatures, BlocksFeature({ blocks: ["templateInfoGridThreeColumns","infoQuote","infoTip","inlineCTA","globalCTA","table","templateInfoAccordion","templateMedia"] })] })
    }
  ]
} as const satisfies Block
