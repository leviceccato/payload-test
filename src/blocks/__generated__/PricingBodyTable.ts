import type { Block } from "payload"

export const PricingBodyTable = {
  slug: 'pricingBodyTable',
  admin: {
    disableBlockName: true,
  },
  fields: [
    
    {
      name: "title",
      required: true,
      type: "text"
    },

    {
      name: "tableRows",
      required: true,
      type: "blocks",
      blocks: [],
      blockReferences: ["pricingBodyTableRow"],
      minRows: 1
    }
  ]
} as const satisfies Block
