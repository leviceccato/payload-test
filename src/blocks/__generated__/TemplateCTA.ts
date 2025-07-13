import type { Block } from "payload"

export const TemplateCTA = {
  slug: 'templateCTA',
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
      name: "authorBody",
      type: "text"
    },

    {
      name: "shareTitle",
      required: true,
      type: "text"
    },

    {
      name: "copiedTitle",
      required: true,
      type: "text"
    },

    {
      name: "shareFacebook",
      type: "checkbox",
      defaultValue: true
    },

    {
      name: "shareTwitter",
      type: "checkbox",
      defaultValue: true
    },

    {
      name: "shareLinkedin",
      type: "checkbox",
      defaultValue: true
    },

    {
      name: "shareEmail",
      type: "checkbox",
      defaultValue: true
    },

    {
      name: "copyLink",
      type: "checkbox",
      defaultValue: true
    },

    {
      name: "teamMember",
      hasMany: false,
      type: "relationship",
      relationTo: ["author"]
    },

    {
      name: "button",
      required: true,
      type: "blocks",
      blocks: [],
      blockReferences: ["button", "globalButtons"],
      minRows: 1,
      maxRows: 1
    }
  ]
} as const satisfies Block
