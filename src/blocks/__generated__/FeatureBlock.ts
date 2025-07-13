import type { Block } from "payload"

export const FeatureBlock = {
  slug: 'featureBlock',
  admin: {
    disableBlockName: true,
  },
  fields: [
    
    {
      name: "title",
      type: "text"
    },

    {
      name: "heading",
      type: "text"
    },

    {
      name: "body",
      type: "text"
    },

    {
      name: "integrations",
      type: "blocks",
      blocks: [],
      blockReferences: ["featureIntegration"]
    },

    {
      name: "link",
      type: "text"
    },

    {
      name: "linkText",
      type: "text"
    },

    {
      name: "image",
      type: "upload",
      relationTo: "media",
      filterOptions: {"mimeType":{"contains":["image"]}}
    }
  ]
} as const satisfies Block
