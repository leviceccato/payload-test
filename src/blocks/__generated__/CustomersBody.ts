import type { Block } from "payload"


export const CustomersBody = {
  slug: 'customersBody',
  admin: {
    disableBlockName: true,
  },
  fields: [
    
    {
      name: "buttonLabel",
      required: true,
      type: "text",
      defaultValue: "Read more"
    },

    {
      name: "emptyListTitle",
      required: true,
      type: "text",
      defaultValue: "Oops, nothing was found"
    }
  ]
} as const satisfies Block
