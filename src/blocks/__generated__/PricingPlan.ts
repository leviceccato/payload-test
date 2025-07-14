import type { Block } from "payload"


export const PricingPlan = {
  slug: 'pricingPlan',
  admin: {
    disableBlockName: true,
  },
  fields: [
    
    {
      name: "name",
      required: true,
      type: "text"
    },

    {
      name: "monthlyPrice",
      required: true,
      type: "text"
    },

    {
      name: "monthlyPriceLabel",
      type: "text"
    },

    {
      name: "annualyPrice",
      required: true,
      type: "text"
    },

    {
      name: "annualyPriceLabel",
      type: "text"
    },

    {
      name: "button",
      required: true,
      type: "blocks",
      blocks: [],
      blockReferences: ["button", "globalButtons"],
      minRows: 1,
      maxRows: 1
    },

    {
      name: "caption",
      type: "text"
    },

    {
      name: "body",
      required: true,
      type: "text"
    },

    {
      name: "items",
      required: true,
      type: "blocks",
      blocks: [],
      blockReferences: ["pricingPlanItem"],
      minRows: 2,
      maxRows: 2
    }
  ]
} as const satisfies Block
