import type { Block } from "payload"

export const FooterTitleItem = {
  slug: 'footerTitleItem',
  admin: {
    disableBlockName: true,
  },
  fields: [
    
    {
      name: "body",
      required: true,
      type: "text"
    }
  ]
} as const satisfies Block
