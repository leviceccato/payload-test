import type { Block } from "payload"

export const FeatureGuide = {
  slug: 'featureGuide',
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
