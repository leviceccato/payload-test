import type { Block } from "payload"

export const FooterLinksGroup = {
  slug: 'footerLinksGroup',
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
      name: "links",
      required: true,
      type: "blocks",
      blocks: [],
      blockReferences: ["footerItem", "footerTitleItem"]
    }
  ]
} as const satisfies Block
