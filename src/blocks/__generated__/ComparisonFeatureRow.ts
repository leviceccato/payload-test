import type { Block } from "payload"


export const ComparisonFeatureRow = {
  slug: 'comparisonFeatureRow',
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
      name: "monthlyPrice",
      required: true,
      type: "text"
    },

    {
      name: "annualyPrice",
      required: true,
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
    }
  ]
} as const satisfies Block
