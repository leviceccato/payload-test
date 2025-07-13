import type { Block } from "payload"

export const FormSubtitle = {
  slug: 'formSubtitle',
  admin: {
    disableBlockName: true,
  },
  fields: [
    
    {
      name: "subtitle",
      required: true,
      type: "richText"
    }
  ]
} as const satisfies Block
