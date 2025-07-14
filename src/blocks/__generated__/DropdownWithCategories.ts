import type { Block } from "payload"


export const DropdownWithCategories = {
  slug: 'dropdownWithCategories',
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
      name: "body",
      required: true,
      type: "text"
    },
// TODO: Create a group (undefined: label,link,eventName),

    {
      name: "label",
      type: "text"
    },

    {
      name: "link",
      type: "text"
    },

    {
      name: "eventName",
      type: "text"
    },
// TODO: Create a group (undefined: mainColumnSubtitle,mainColumnLinks),

    {
      name: "mainColumnSubtitle",
      required: true,
      type: "text"
    },

    {
      name: "mainColumnLinks",
      required: true,
      type: "blocks",
      blocks: [],
      blockReferences: ["navBarCategoryLink"]
    },
// TODO: Create a group (undefined: secondColumnLinks,secondColumnSubtitle),

    {
      name: "secondColumnSubtitle",
      type: "text"
    },

    {
      name: "secondColumnLinks",
      type: "blocks",
      blocks: [],
      blockReferences: ["navBarCategoryLink"]
    },
// TODO: Create a group (undefined: thirdColumnSubtitle,thirdColumnLinks),

    {
      name: "thirdColumnSubtitle",
      type: "text"
    },

    {
      name: "thirdColumnLinks",
      type: "blocks",
      blocks: [],
      blockReferences: ["navBarCategoryLink"]
    }
  ]
} as const satisfies Block
