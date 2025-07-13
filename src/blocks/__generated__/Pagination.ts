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
      type: "text"
    },

    {
      name: "previousPageButtonTitle",
      required: true,
      type: "text"
    }
  ]
} as const satisfies Block
