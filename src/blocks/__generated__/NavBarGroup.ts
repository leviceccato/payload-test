import type { Block } from "payload"


export const NavBarGroup = {
  slug: 'navBarGroup',
  admin: {
    disableBlockName: true,
  },
  fields: [
    
    {
      name: "menuLabel",
      required: true,
      type: "text"
    },

    {
      name: "link",
      admin: {"description":"If group has the dropdown item, link must be empty."},
      type: "text"
    },

    {
      name: "dropdown",
      type: "blocks",
      blocks: [],
      blockReferences: ["dropdownWithCategories", "dropdownWithoutCategories"],
      maxRows: 1
    }
  ]
} as const satisfies Block
