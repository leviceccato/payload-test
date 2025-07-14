import type { Block } from "payload"


export const PricingBodyTableIconCell = {
  slug: 'pricingBodyTableIconCell',
  admin: {
    disableBlockName: true,
  },
  fields: [
    
    {
      name: "availableIcon",
      type: "checkbox"
    }
  ]
} as const satisfies Block
