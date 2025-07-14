import type { Block } from "payload"


export const TemplateInfoGridThreeColumns = {
  slug: 'templateInfoGridThreeColumns',
  admin: {
    disableBlockName: true,
  },
  fields: [
    
    {
      name: "columns",
      required: true,
      type: "blocks",
      blocks: [],
      blockReferences: ["templateInfoGridColumn"],
      maxRows: 3
    }
  ]
} as const satisfies Block
