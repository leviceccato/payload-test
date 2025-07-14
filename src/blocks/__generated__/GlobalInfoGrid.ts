import type { Block } from "payload"


export const GlobalInfoGrid = {
  slug: 'globalInfoGrid',
  admin: {
    disableBlockName: true,
  },
  fields: [
    
    {
      name: "infoGrid",
      required: true,
      hasMany: false,
      type: "relationship",
      relationTo: ["globalInfoGrids"]
    }
  ]
} as const satisfies Block
