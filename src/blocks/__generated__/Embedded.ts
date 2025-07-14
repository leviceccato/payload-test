import type { Block } from "payload"


export const Embedded = {
  slug: 'embedded',
  admin: {
    disableBlockName: true,
  },
  fields: [
    
    {
      name: "embedded",
      required: true,
      type: "textarea"
    }
  ]
} as const satisfies Block
