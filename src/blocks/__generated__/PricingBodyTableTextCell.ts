import type { Block } from "payload"


export const PricingBodyTableTextCell = {
  slug: 'pricingBodyTableTextCell',
  admin: {
    disableBlockName: true,
  },
  fields: [
    
    {
      name: "label",
      required: true,
      type: "text"
    },

    {
      name: "tooltip",
      type: "group",
      fields: [{ name: "tooltipImage",
      type: "upload",
      relationTo: "assets",
      filterOptions: {"mimeType":{"contains":["image"]}} },
      { name: "tooltipBody",
      type: "text" }
        ]
    }
  ]
} as const satisfies Block
