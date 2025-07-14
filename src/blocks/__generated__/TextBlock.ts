import type { Block } from "payload"


export const TextBlock = {
  slug: 'textBlock',
  admin: {
    disableBlockName: true,
  },
  fields: [
    
    {
      name: "title",
      required: true,
      type: "text"
    },

    {
      name: "subtitle",
      type: "textarea"
    },

    {
      name: "backgroundColor",
      hasMany: false,
      type: "select",
      options: [{"label":"Yellow 04","value":"bg-yellow-04"},{"label":"Neutral 07","value":"bg-neutral-07"}]
    },

    {
      name: "mobileCenter",
      type: "checkbox"
    },

    {
      name: "version",
      required: true,
      hasMany: false,
      type: "select",
      options: [{"label":"Center Aligned","value":"center"},{"label":"Left Aligned","value":"left"},{"label":"Left Aligned with left margin","value":"left-margin"}]
    },

    {
      name: "refForScrollTo",
      admin: {"description":"You need add the same value which you add to button field"},
      type: "text"
    }
  ]
} as const satisfies Block
