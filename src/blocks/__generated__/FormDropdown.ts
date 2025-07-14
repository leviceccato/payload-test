import type { Block } from "payload"


export const FormDropdown = {
  slug: 'formDropdown',
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
      name: "options",
      required: true,
      type: "blocks",
      blocks: [],
      blockReferences: ["dropdownOption"],
      minRows: 1
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
