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
      type: "text",
      defaultValue: "This template is for:"
    },

    {
      name: "authorBody",
      type: "text",
      defaultValue: "Created by:"
    },

    {
      name: "shareTitle",
      required: true,
      type: "text",
      defaultValue: "Share on:"
    },

    {
      name: "copiedTitle",
      required: true,
      type: "text",
      defaultValue: "Copied"
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
