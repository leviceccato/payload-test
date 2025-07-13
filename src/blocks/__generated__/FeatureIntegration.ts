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
      relationTo: "media"
    },

    {
      name: "link",
      type: "text"
    },

    {
      name: "linkText",
      admin: {"description":"Only used for screen readers"},
      type: "text"
    }
  ]
} as const satisfies Block
