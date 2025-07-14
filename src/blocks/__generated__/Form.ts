import type { Block } from "payload"


export const Form = {
  slug: 'form',
  admin: {
    disableBlockName: true,
  },
  fields: [
    
    {
      name: "id",
      required: true,
      admin: {"description":"The field uses for html element and must be without white spaces."},
      type: "text"
    },
// TODO: Create a group (undefined: buttonLabel),

    {
      name: "buttonLabel",
      required: true,
      type: "text"
    },

    {
      name: "alignment",
      required: true,
      hasMany: false,
      type: "select",
      options: [{"label":"Row","value":"row"},{"label":"Column","value":"column"}]
    },

    {
      name: "backgroundColor",
      required: true,
      hasMany: false,
      type: "select",
      options: [{"label":"Neutral 06","value":"bg-neutral-06"},{"label":"Transparent","value":"transparent"}]
    },

    {
      name: "padding",
      required: true,
      hasMany: false,
      type: "select",
      options: [{"label":"0px","value":"0"},{"label":"40px","value":"40"}]
    },

    {
      name: "header",
      type: "blocks",
      blocks: [],
      blockReferences: ["formTitle", "formSubtitle"]
    },

    {
      name: "formElements",
      required: true,
      type: "blocks",
      blocks: [],
      blockReferences: ["formInput", "formDropdown", "formCheckbox"],
      minRows: 1,
      maxRows: 50
    }
  ]
} as const satisfies Block
