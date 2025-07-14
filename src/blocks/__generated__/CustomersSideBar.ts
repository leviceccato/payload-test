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
      type: "text",
      defaultValue: "Filter by use case"
    },

    {
      name: "companySizeTitle",
      required: true,
      type: "text",
      defaultValue: "Filter by company size"
    },

    {
      name: "regionTitle",
      required: true,
      type: "text",
      defaultValue: "Filter by region"
    },

    {
      name: "industryTitle",
      required: true,
      type: "text",
      defaultValue: "Filter by industry"
    },

    {
      name: "clearButtonLabel",
      required: true,
      type: "text",
      defaultValue: "Clear all filters"
    },

    {
      name: "mobileFilterButtonLabel",
      required: true,
      type: "text",
      defaultValue: "Categories"
    }
  ]
} as const satisfies Block
