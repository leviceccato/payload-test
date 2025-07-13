import type { Block } from "payload"

export const SuggestedTemplates = {
  slug: 'suggestedTemplates',
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
