import type { Block } from "payload"

export const FormInput = {
  slug: 'formInput',
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
      name: "autoComplete",
      type: "checkbox"
    },

    {
      name: "type",
      required: true,
      hasMany: false,
      type: "select",
      options: [{"label":"Email","value":"email"},{"label":"Date","value":"date"},{"label":"Number","value":"number"},{"label":"Phone number","value":"tel"},{"label":"Text","value":"text"},{"label":"URL","value":"url"}]
    },

    {
      name: "label",
      type: "text"
    },

    {
      name: "placeholder",
      required: true,
      type: "text"
    },

    {
      name: "errorMessage",
      required: true,
      type: "text"
    }
  ]
} as const satisfies Block
