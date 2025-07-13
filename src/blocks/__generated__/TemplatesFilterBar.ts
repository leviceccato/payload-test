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
      type: "text"
    },

    {
      name: "allButtonLabel",
      required: true,
      type: "text"
    },

    {
      name: "filterTeamTitle",
      required: true,
      type: "text"
    },

    {
      name: "filterUseCaseTitle",
      required: true,
      type: "text"
    },

    {
      name: "filterMethodologyTitle",
      required: true,
      type: "text"
    },

    {
      name: "filterIndustryTitle",
      required: true,
      type: "text"
    },

    {
      name: "mobileFilterButtonLabel",
      required: true,
      type: "text"
    },

    {
      name: "clearButtonLabel",
      required: true,
      type: "text"
    }
  ]
} as const satisfies Block
