import type { Block } from "payload"

export const PricingBodyTableRow = {
  slug: 'pricingBodyTableRow',
  admin: {
    disableBlockName: true,
  },
  fields: [
    
    {
      name: "cells",
      required: true,
      type: "blocks",
      blocks: [],
      blockReferences: ["pricingBodyTableTextCell", "pricingBodyTableIconCell"],
      minRows: 5,
      maxRows: 5
    }
  ]
} as const satisfies Block
