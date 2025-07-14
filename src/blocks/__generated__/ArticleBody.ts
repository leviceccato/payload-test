import type { Block } from "payload"
import { lexicalEditor, BlocksFeature } from "@payloadcms/richtext-lexical"

export const ArticleBody = {
  slug: 'articleBody',
  admin: {
    disableBlockName: true,
  },
  fields: [
    
    {
      name: "sideBar",
      required: true,
      type: "blocks",
      blocks: [],
      blockReferences: ["tableOfContent"],
      minRows: 1,
      maxRows: 1
    },

    {
      name: "body",
      required: true,
      type: "richText",
      editor: lexicalEditor({ features: ({ rootFeatures }) => [...rootFeatures, BlocksFeature({ blocks: ["templateInfoGridThreeColumns","infoQuote","infoTip","inlineCTA","globalCTA","table","templateInfoAccordion","templateMedia","tableRichText"] })] })
    }
  ]
} as const satisfies Block
