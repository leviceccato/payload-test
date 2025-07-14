import type { Block } from "payload"


export const GlobalClientLogotypes = {
  slug: 'globalClientLogotypes',
  admin: {
    disableBlockName: true,
  },
  fields: [
    
    {
      name: "clientLogotypes",
      required: true,
      hasMany: false,
      type: "relationship",
      relationTo: ["clientLogotype"]
    }
  ]
} as const satisfies Block
