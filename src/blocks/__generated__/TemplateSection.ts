import type { Block } from "payload"
import { lexicalEditor, BlocksFeature } from "@payloadcms/richtext-lexical"

export const TemplateSection = {
  slug: 'templateSection',
  admin: {
    disableBlockName: true,
  },
  fields: [
    
    {
      name: "sideBar",
      required: true,
      type: "blocks",
      blocks: [],
      blockReferences: ["templateCTA", "globalCTA"],
      minRows: 1,
      maxRows: 1
    },

    {
      name: "templateBody",
      required: true,
      type: "richText",
      editor: lexicalEditor({ features: ({ rootFeatures }) => [...rootFeatures, BlocksFeature({ blocks: ["templateInfoGridThreeColumns","infoQuote","infoTip","inlineCTA","globalCTA","table","templateInfoAccordion","templateMedia","tableRichText"] })] })
    }
  ]
} as const satisfies Block
