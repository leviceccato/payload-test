import type { Block } from "payload"


export const TextLinkButton = {
  slug: 'textLinkButton',
  admin: {
    disableBlockName: true,
  },
  fields: [
    
    {
      name: "label",
      required: true,
      type: "text"
    },

    {
      name: "link",
      required: true,
      type: "text"
    },

    {
      name: "iconPosition",
      required: true,
      hasMany: false,
      type: "select",
      options: [{"label":"Left","value":"left"},{"label":"Right","value":"right"}],
      defaultValue: "right"
    },

    {
      name: "eventName",
      type: "text"
    }
  ]
} as const satisfies Block
