import type { Block } from "payload"

export const SuggestedArticles = {
  slug: 'suggestedArticles',
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
