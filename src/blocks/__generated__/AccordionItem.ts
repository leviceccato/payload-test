import type { Block } from "payload"

export const AccordionItem = {
  slug: 'accordionItem',
  admin: {
    disableBlockName: true,
  },
  fields: [
    
    {
      name: "title",
      required: true,
      type: "text"
    },

    {
      name: "description",
      required: true,
      type: "richText"
    }
  ]
} as const satisfies Block
