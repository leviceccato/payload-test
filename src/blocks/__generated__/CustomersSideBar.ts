import type { Block } from "payload"

export const CustomersSideBar = {
  slug: 'customersSideBar',
  admin: {
    disableBlockName: true,
  },
  fields: [
    
    {
      name: "showRegionFilter",
      type: "checkbox"
    },

    {
      name: "sortTitle",
      required: true,
      admin: {"description":"Sort by"},
      type: "text"
    },

    {
      name: "useCaseTitle",
      required: true,
      type: "text"
    },

    {
      name: "companySizeTitle",
      required: true,
      type: "text"
    },

    {
      name: "regionTitle",
      required: true,
      type: "text"
    },

    {
      name: "industryTitle",
      required: true,
      type: "text"
    },

    {
      name: "clearButtonLabel",
      required: true,
      type: "text"
    },

    {
      name: "mobileFilterButtonLabel",
      required: true,
      type: "text"
    }
  ]
} as const satisfies Block
