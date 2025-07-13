import type { Block } from "payload"

export const Toggle = {
  slug: 'toggle',
  admin: {
    disableBlockName: true,
  },
  fields: [
    
    {
      name: "activeLabel",
      required: true,
      type: "text"
    },

    {
      name: "inactiveLabel",
      required: true,
      type: "text"
    }
  ]
} as const satisfies Block
