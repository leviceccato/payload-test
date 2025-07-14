import type { Block } from "payload"


export const Pagination = {
  slug: 'pagination',
  admin: {
    disableBlockName: true,
  },
  fields: [
    
    {
      name: "nextPageButtonTitle",
      required: true,
      type: "text",
      defaultValue: "Next page"
    },

    {
      name: "previousPageButtonTitle",
      required: true,
      type: "text",
      defaultValue: "Previous page"
    }
  ]
} as const satisfies Block
