import type { Block } from "payload"
import { lexicalEditor, BlocksFeature } from "@payloadcms/richtext-lexical"

export const RichText = {
  slug: 'richText',
  admin: {
    disableBlockName: true,
  },
  fields: [
    
    {
      name: "content",
      type: "richText",
      editor: lexicalEditor({ features: ({ rootFeatures }) => [...rootFeatures, BlocksFeature({ blocks: ["globalCTA","infoQuote","infoTip","inlineCTA","table","templateInfoAccordion","templateMedia"] })] })
    }
  ]
} as const satisfies Block
