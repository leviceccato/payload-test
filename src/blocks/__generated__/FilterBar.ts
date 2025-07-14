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
      type: "text",
      defaultValue: "Oops, nothing was found"
    },

    {
      name: "resultLabel",
      required: true,
      type: "text",
      defaultValue: "Results"
    },

    {
      name: "allFilterLabel",
      required: true,
      type: "text",
      defaultValue: "All"
    }
  ]
} as const satisfies Block
