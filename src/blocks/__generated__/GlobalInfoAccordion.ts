import type { Block } from "payload"


export const GlobalInfoAccordion = {
  slug: 'globalInfoAccordion',
  admin: {
    disableBlockName: true,
  },
  fields: [
    
    {
      name: "infoAccordion",
      required: true,
      hasMany: false,
      type: "relationship",
      relationTo: ["globalInfoAccordions"]
    }
  ]
} as const satisfies Block
