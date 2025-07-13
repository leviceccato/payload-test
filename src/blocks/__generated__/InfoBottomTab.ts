import type { Block } from "payload"

export const InfoBottomTab = {
  slug: 'infoBottomTab',
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
      name: "subtitle",
      required: true,
      type: "text"
    }
  ]
} as const satisfies Block
