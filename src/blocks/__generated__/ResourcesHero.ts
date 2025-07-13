import type { Block } from "payload"

export const ResourcesHero = {
  slug: 'resourcesHero',
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
      name: "button",
      type: "blocks",
      blocks: [],
      blockReferences: ["button", "globalButtons"]
    },

    {
      name: "subtitle",
      required: true,
      type: "textarea"
    },

    {
      name: "buttonSubtext",
      type: "text"
    },

    {
      name: "backgroundColor",
      required: true,
      hasMany: false,
      type: "select",
      options: [{"label":"Neutral 06","value":"bg-neutral-06"},{"label":"Green 04","value":"bg-green-04"},{"label":"Blue 05","value":"bg-blue-05"}]
    },

    {
      name: "media",
      required: true,
      type: "upload",
      relationTo: "assets",
      filterOptions: {"mimeType":{"contains":["image"]}}
    },

    {
      name: "rating",
      hasMany: false,
      type: "relationship",
      relationTo: ["rating"]
    },

    {
      name: "isCentered",
      type: "checkbox"
    }
  ]
} as const satisfies Block
