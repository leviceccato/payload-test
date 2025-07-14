import type { Block } from "payload"


export const IconButton = {
  slug: 'iconButton',
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
      name: "icon",
      required: true,
      type: "upload",
      relationTo: "assets"
    },

    {
      name: "iconPosition",
      required: true,
      hasMany: false,
      type: "select",
      options: [{"label":"Right","value":"right"},{"label":"Left","value":"left"}],
      defaultValue: "left"
    },

    {
      name: "eventName",
      type: "text"
    }
  ]
} as const satisfies Block
