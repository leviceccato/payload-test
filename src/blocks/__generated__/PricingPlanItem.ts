import type { Block } from "payload"

export const PricingPlanItem = {
  slug: 'pricingPlanItem',
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
      name: "list",
      required: true,
      type: "blocks",
      blocks: [],
      blockReferences: ["pricingPlanListItem"]
    }
  ]
} as const satisfies Block
