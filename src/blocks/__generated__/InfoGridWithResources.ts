import type { Block } from "payload"


export const InfoGridWithResources = {
  slug: 'infoGridWithResources',
  admin: {
    disableBlockName: true,
  },
  fields: [
    
    {
      name: "resources",
      required: true,
      admin: {"description":"Maximum values - 3"},
      hasMany: true,
      type: "relationship",
      relationTo: ["article", "template", "video", "guideMainInfo"],
      maxRows: 3,
      minRows: 3
    },

    {
      name: "buttonLabel",
      required: true,
      type: "text",
      defaultValue: "Read more"
    },

    {
      name: "guideLabel",
      required: true,
      type: "text",
      defaultValue: "Guide"
    },

    {
      name: "articleLabel",
      required: true,
      type: "text",
      defaultValue: "Article"
    },

    {
      name: "videoLabel",
      required: true,
      type: "text",
      defaultValue: "Video"
    },

    {
      name: "templateLabel",
      required: true,
      type: "text",
      defaultValue: "Template"
    }
  ]
} as const satisfies Block
