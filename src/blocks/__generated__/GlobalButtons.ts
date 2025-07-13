import type { Block } from "payload"

export const GlobalButtons = {
  slug: 'globalButtons',
  admin: {
    disableBlockName: true,
  },
  fields: [
    
    {
      name: "button",
      required: true,
      hasMany: false,
      type: "relationship",
      relationTo: ["globalButton"]
    }
  ]
} as const satisfies Block
