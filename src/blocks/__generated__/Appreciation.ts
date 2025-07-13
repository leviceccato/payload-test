import type { Block } from "payload"

export const Appreciation = {
  slug: 'appreciation',
  admin: {
    disableBlockName: true,
  },
  fields: [
    
    {
      name: "review",
      hasMany: false,
      type: "relationship",
      relationTo: ["globalReviews"]
    },

    {
      // TODO: Table: consider custom implementation
name: "stats",
      type: "json"
    }
  ]
} as const satisfies Block
