import type { Block } from "payload"

export const TextLink = {
  slug: 'textLink',
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
      name: "link",
      required: true,
      type: "text"
    }
  ]
} as const satisfies Block
