import type { Block } from "payload"

export const FooterItem = {
  slug: 'footerItem',
  admin: {
    disableBlockName: true,
  },
  fields: [
    
    {
      name: "body",
      required: true,
      type: "text"
    },

    {
      name: "tagLabel",
      type: "text"
    },

    {
      name: "link",
      required: true,
      type: "text"
    }
  ]
} as const satisfies Block
