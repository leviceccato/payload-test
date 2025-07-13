import type { Block } from "payload"

export const InfoGridTwoColumnsWithTitle = {
  slug: 'infoGridTwoColumnsWithTitle',
  admin: {
    disableBlockName: true,
  },
  fields: [
    
    {
      name: "backgroundColor",
      required: true,
      hasMany: false,
      type: "select",
      options: [{"label":"Green 04","value":"bg-green-04"},{"label":"Green 02","value":"bg-green-02"},{"label":"Yellow 04","value":"bg-yellow-04"},{"label":"Blue 04","value":"bg-blue-04"},{"label":"Neutral 06","value":"bg-neutral-06"},{"label":"Neutral 01","value":"bg-neutral-01"},{"label":"Neutral 07","value":"bg-neutral-07"}]
    },

    {
      name: "title",
      required: true,
      type: "text"
    },

    {
      name: "subtitle",
      type: "textarea"
    },

    {
      name: "image",
      required: true,
      type: "upload",
      relationTo: "assets"
    },

    {
      name: "items",
      type: "blocks",
      blocks: [],
      blockReferences: ["infoGridTwoColumnsWithTitleItem"]
    }
  ]
} as const satisfies Block
