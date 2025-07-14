import type { Block } from "payload"


export const CtaForm = {
  slug: 'ctaForm',
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
      required: true,
      type: "textarea"
    },

    {
      name: "asset",
      required: true,
      admin: {"description":"You must select only image or Lottie JSON files."},
      type: "upload",
      relationTo: "assets",
      filterOptions: {"mimeType":{"contains":[]}}
    },

    {
      name: "formId",
      admin: {"description":"The field uses for html element and must be without white spaces."},
      type: "text"
    },

    {
      name: "form",
      type: "blocks",
      blocks: [],
      blockReferences: ["formInput", "formDropdown", "formCheckbox"]
    },
// TODO: Create a group (undefined: label,link,buttonPoisition,buttonPosition),

    {
      name: "label",
      required: true,
      type: "text"
    },

    {
      name: "link",
      admin: {"description":"The link overwriten with Form Input and Form ID fields"},
      type: "text"
    },

    {
      name: "buttonPosition",
      hasMany: false,
      type: "select",
      options: [{"label":"Bottom","value":"bottom"},{"label":"Right","value":"right"}]
    }
  ]
} as const satisfies Block
