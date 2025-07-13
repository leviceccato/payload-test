import type { Block } from "payload"

export const TableOfContent = {
  slug: 'tableOfContent',
  admin: {
    disableBlockName: true,
  },
  fields: [
    
    {
      name: "shareTitle",
      required: true,
      type: "text"
    },

    {
      name: "contentType",
      admin: {"description":"The kind of content being shared (eg. article)"},
      hasMany: false,
      type: "select",
      options: [{"label":"article","value":"article"},{"label":"video","value":"video"},{"label":"guide","value":"guide"},{"label":"template","value":"template"},{"label":"integration","value":"integration"},{"label":"event","value":"event"}],
      defaultValue: "article"
    },

    {
      name: "copiedTitle",
      required: true,
      type: "text"
    },

    {
      name: "shareLinkedin",
      type: "checkbox",
      defaultValue: true
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
      name: "embed",
      type: "textarea"
    }
  ]
} as const satisfies Block
