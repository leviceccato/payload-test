import type { Block } from "payload"

export const RichText = {
  slug: 'richText',
  admin: {
    disableBlockName: true,
  },
  fields: [
    
    {
      name: "content",
      type: "richText"
    }
  ]
} as const satisfies Block
