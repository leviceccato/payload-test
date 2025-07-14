import type { Block } from "payload"


export const PricingСomparisonFeaturesRow = {
  slug: 'pricingСomparisonFeaturesRow',
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
      name: "comparisonFeatures",
      required: true,
      type: "blocks",
      blocks: [],
      blockReferences: ["comparisonFeatureRow"],
      minRows: 4,
      maxRows: 4
    }
  ]
} as const satisfies Block
