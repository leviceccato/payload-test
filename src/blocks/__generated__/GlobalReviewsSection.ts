import type { Block } from "payload"

export const GlobalReviewsSection = {
  slug: 'globalReviewsSection',
  admin: {
    disableBlockName: true,
  },
  fields: [
    
    {
      name: "reviewBlock",
      required: true,
      hasMany: false,
      type: "relationship",
      relationTo: ["globalReviews"]
    }
  ]
} as const satisfies Block
