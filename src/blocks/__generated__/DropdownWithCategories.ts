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

    {
      name: "button",
      type: "group",
      fields: [{ name: "label",
      type: "text" },
      { name: "link",
      type: "text" },
      { name: "eventName",
      type: "text" }
        ]
    },

    {
      name: "mainColumn",
      type: "group",
      fields: [{ name: "mainColumnSubtitle",
      required: true,
      type: "text" },
      { name: "mainColumnLinks",
      required: true,
      type: "blocks",
      blocks: [],
      blockReferences: ["navBarCategoryLink"] }
        ]
    },

    {
      name: "secondColumn",
      type: "group",
      fields: [{ name: "secondColumnLinks",
      type: "blocks",
      blocks: [],
      blockReferences: ["navBarCategoryLink"] },
      { name: "secondColumnSubtitle",
      type: "text" }
        ]
    },

    {
      name: "thirdColumn",
      type: "group",
      fields: [{ name: "thirdColumnSubtitle",
      type: "text" },
      { name: "thirdColumnLinks",
      type: "blocks",
      blocks: [],
      blockReferences: ["navBarCategoryLink"] }
        ]
    }
  ]
} as const satisfies Block
