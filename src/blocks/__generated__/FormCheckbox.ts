import type { Block } from "payload"

export const FormCheckbox = {
  slug: 'formCheckbox',
  admin: {
    disableBlockName: true,
  },
  fields: [
    
    {
      name: "name",
      required: true,
      admin: {"description":"The field uses for html element and must be without white spaces."},
      type: "text"
    },

    {
      name: "required",
      type: "checkbox"
    },

    {
      name: "label",
      required: true,
      type: "richText"
    },

    {
      name: "errorMessage",
      required: true,
      type: "text"
    }
  ]
} as const satisfies Block
