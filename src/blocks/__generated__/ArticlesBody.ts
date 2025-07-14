import type { Block } from "payload"


export const ArticlesBody = {
  slug: 'articlesBody',
  admin: {
    disableBlockName: true,
  },
  fields: [
    
    {
      name: "label",
      type: "checkbox"
    },

    {
      name: "date",
      type: "checkbox"
    },

    {
      name: "readTime",
      type: "checkbox"
    },

    {
      name: "author",
      type: "checkbox"
    }
  ]
} as const satisfies Block
