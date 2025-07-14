import type { Block } from "payload"


export const PricingTable = {
  slug: 'pricingTable',
  admin: {
    disableBlockName: true,
  },
  fields: [
    
    {
      name: "plans",
      required: true,
      type: "blocks",
      blocks: [],
      blockReferences: ["pricingPlan"],
      minRows: 4,
      maxRows: 4
    }
  ]
} as const satisfies Block
