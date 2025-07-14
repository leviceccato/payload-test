import type { Block } from "payload"


export const PricingTableComparison = {
  slug: 'pricingTableComparison',
  admin: {
    disableBlockName: true,
  },
  fields: [
    
    {
      name: "mobileDropdownTitle",
      required: true,
      type: "text",
      defaultValue: "Plan type"
    },

    {
      name: "featureRow",
      required: true,
      type: "blocks",
      blocks: [],
      blockReferences: ["pricingСomparisonFeaturesRow"],
      minRows: 1,
      maxRows: 1
    },

    {
      name: "bodyTables",
      required: true,
      type: "blocks",
      blocks: [],
      blockReferences: ["pricingBodyTable"]
    }
  ]
} as const satisfies Block
