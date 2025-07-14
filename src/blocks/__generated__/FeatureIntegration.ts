import type { Block } from "payload"


export const FeatureIntegration = {
  slug: 'featureIntegration',
  admin: {
    disableBlockName: true,
  },
  fields: [
    
    {
      name: "icon",
      type: "upload",
      relationTo: "assets"
    },

    {
      name: "link",
      type: "text"
    },

    {
      name: "linkText",
      admin: {"description":"Only used for screen readers"},
      type: "text",
      defaultValue: ""
    }
  ]
} as const satisfies Block
