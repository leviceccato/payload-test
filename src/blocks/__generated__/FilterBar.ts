import type { Block } from "payload"

export const FilterBar = {
  slug: 'filterBar',
  admin: {
    disableBlockName: true,
  },
  fields: [
    
    {
      name: "searchInputPlaceholder",
      required: true,
      type: "text"
    },

    {
      name: "emptyListTitle",
      required: true,
      type: "text"
    },

    {
      name: "resultLabel",
      required: true,
      type: "text"
    },

    {
      name: "allFilterLabel",
      required: true,
      type: "text"
    }
  ]
} as const satisfies Block
