import type { Block } from "payload"


export const TemplatesFilterBar = {
  slug: 'templatesFilterBar',
  admin: {
    disableBlockName: true,
  },
  fields: [
    
    {
      name: "searchInputPlaceholder",
      required: true,
      type: "text",
      defaultValue: "Search"
    },

    {
      name: "allButtonLabel",
      required: true,
      type: "text",
      defaultValue: "All templates"
    },

    {
      name: "filterTeamTitle",
      required: true,
      type: "text",
      defaultValue: "Filter by team"
    },

    {
      name: "filterUseCaseTitle",
      required: true,
      type: "text",
      defaultValue: "Filter by use case"
    },

    {
      name: "filterMethodologyTitle",
      required: true,
      type: "text",
      defaultValue: "Filter by methodology"
    },

    {
      name: "filterIndustryTitle",
      required: true,
      type: "text",
      defaultValue: "Filter by industry"
    },

    {
      name: "mobileFilterButtonLabel",
      required: true,
      type: "text",
      defaultValue: "Categories"
    },

    {
      name: "clearButtonLabel",
      required: true,
      type: "text",
      defaultValue: "Clear all filters"
    }
  ]
} as const satisfies Block
