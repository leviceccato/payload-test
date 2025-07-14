import type { Block } from "payload"


export const FeatureReport = {
  slug: 'featureReport',
  admin: {
    disableBlockName: true,
  },
  fields: [
    
    {
      name: "buttonLabel",
      required: true,
      type: "text"
    }
  ]
} as const satisfies Block
