import type { Block } from "payload"


export const HomeHero = {
  slug: 'homeHero',
  admin: {
    disableBlockName: true,
  },
  fields: [
    
    {
      name: "richTitle",
      type: "blocks",
      blocks: [],
      blockReferences: ["richTitleSegment", "richTitleGradientSegment"]
    },

    {
      name: "subtitle",
      required: true,
      type: "textarea"
    },

    {
      name: "button",
      type: "blocks",
      blocks: [],
      blockReferences: ["button", "globalButtons"],
      minRows: 1,
      maxRows: 2
    },

    {
      name: "caption",
      type: "text"
    },

    {
      name: "rating",
      hasMany: false,
      type: "relationship",
      relationTo: ["rating"]
    }
  ]
} as const satisfies Block
