import type { Block } from "payload"


export const FeatureArticle = {
  slug: 'featureArticle',
  admin: {
    disableBlockName: true,
  },
  fields: [
    
    {
      name: "Show Label",
      type: "checkbox"
    },

    {
      name: "Show Date",
      type: "checkbox"
    },

    {
      name: "Show Read Time",
      type: "checkbox"
    },

    {
      name: "Show Author",
      type: "checkbox"
    }
  ]
} as const satisfies Block
