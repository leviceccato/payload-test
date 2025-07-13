import type { Block } from "payload"

export const InlineCTA = {
  slug: 'inlineCTA',
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
      type: "textarea"
    },

    {
      name: "backgroundColor",
      required: true,
      hasMany: false,
      type: "select",
      options: [{"label":"Green 03","value":"bg-green-03"},{"label":"Green 04","value":"bg-green-04"},{"label":"Pink 04","value":"bg-pink-04"},{"label":"Purple 04","value":"bg-purple-04"},{"label":"Yellow 03","value":"bg-yellow-03"}]
    },

    {
      name: "button",
      required: true,
      type: "blocks",
      blocks: [],
      blockReferences: ["button", "globalButtons"],
      minRows: 1,
      maxRows: 1
    },

    {
      name: "image",
      required: true,
      type: "upload",
      relationTo: "media"
    }
  ]
} as const satisfies Block
