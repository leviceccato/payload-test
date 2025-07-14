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
      type: "text",
      defaultValue: "See the template"
    },

    {
      name: "emptyListTitle",
      required: true,
      type: "text",
      defaultValue: "Oops, nothing was found"
    }
  ]
} as const satisfies Block
