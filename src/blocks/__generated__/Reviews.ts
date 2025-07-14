import type { Block } from "payload"


export const Reviews = {
  slug: 'reviews',
  admin: {
    disableBlockName: true,
  },
  fields: [
    
    {
      name: "backgroundColor",
      hasMany: false,
      type: "select",
      options: [{"label":"Green 02","value":"bg-green-02"},{"label":"Pink 01","value":"bg-pink-01"}],
      defaultValue: "bg-green-02"
    },

    {
      name: "Review Components",
      required: true,
      type: "blocks",
      blocks: [],
      blockReferences: ["review"]
    }
  ]
} as const satisfies Block
