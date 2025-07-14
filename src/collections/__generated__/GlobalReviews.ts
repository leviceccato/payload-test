import type { CollectionConfig } from "payload"


export const GlobalReviews = {
  slug: 'globalReviews',
  
  fields: [
    
    {
      name: "reviewBlock",
      required: true,
      type: "blocks",
      blocks: [],
      blockReferences: ["reviews", "singleReview"],
      minRows: 1,
      maxRows: 1
    }
  ]
} as const satisfies CollectionConfig
