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
// TODO: Create a group (undefined: tooltipImage,tooltipBody),

    {
      name: "tooltipBody",
      type: "text"
    },

    {
      name: "tooltipImage",
      type: "upload",
      relationTo: "assets",
      filterOptions: {"mimeType":{"contains":["image"]}}
    }
  ]
} as const satisfies Block
