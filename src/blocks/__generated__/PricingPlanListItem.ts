import type { Block } from "payload"

export const PricingPlanListItem = {
  slug: 'pricingPlanListItem',
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
      name: "additionalLabel",
      type: "text"
    },
// TODO: Create a group (undefined: tooltipImage,tooltipBody),

    {
      name: "tooltipImage",
      type: "upload",
      relationTo: "media"
    },

    {
      name: "tooltipBody",
      type: "text"
    }
  ]
} as const satisfies Block
