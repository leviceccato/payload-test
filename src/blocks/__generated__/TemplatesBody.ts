import type { Block } from "payload"

export const TemplatesBody = {
  slug: 'templatesBody',
  admin: {
    disableBlockName: true,
  },
  fields: [
    
    {
      name: "buttonLabel",
      required: true,
      type: "text"
    },

    {
      name: "emptyListTitle",
      required: true,
      type: "text"
    }
  ]
} as const satisfies Block
