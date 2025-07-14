import type { CollectionConfig } from "payload"


export const CallToAction = {
  slug: 'callToAction',
  
  fields: [
    
    {
      name: "block",
      type: "blocks",
      blocks: [],
      blockReferences: ["inlineCTA", "templateCTA", "templatesCTA", "cta", "ctaForm", "banner", "ctaSmall"],
      minRows: 1,
      maxRows: 1
    }
  ]
} as const satisfies CollectionConfig
