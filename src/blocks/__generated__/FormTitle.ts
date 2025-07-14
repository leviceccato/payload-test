import type { Block } from "payload"


export const FormTitle = {
  slug: 'formTitle',
  admin: {
    disableBlockName: true,
  },
  fields: [
    
    {
      name: "title",
      required: true,
      type: "text"
    }
  ]
} as const satisfies Block
