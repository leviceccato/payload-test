import type { Block } from "payload"

export const CustomersSection = {
  slug: 'customersSection',
  admin: {
    disableBlockName: true,
  },
  fields: [
    
    {
      name: "sidebar",
      required: true,
      type: "blocks",
      blocks: [],
      blockReferences: ["customersSideBar"],
      minRows: 1,
      maxRows: 1
    },

    {
      name: "rightBlocks",
      required: true,
      type: "blocks",
      blocks: [],
      blockReferences: ["customersBody", "pagination"],
      minRows: 1,
      maxRows: 2
    }
  ]
} as const satisfies Block
