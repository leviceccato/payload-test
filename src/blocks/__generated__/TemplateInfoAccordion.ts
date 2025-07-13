import type { Block } from "payload"

export const TemplateInfoAccordion = {
  slug: 'templateInfoAccordion',
  admin: {
    disableBlockName: true,
  },
  fields: [
    
    {
      name: "items",
      required: true,
      type: "blocks",
      blocks: [],
      blockReferences: ["accordionItem"],
      minRows: 1
    }
  ]
} as const satisfies Block
