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

    {
      name: "tooltip",
      type: "group",
      fields: [{ name: "tooltipImage",
      type: "upload",
      relationTo: "assets" },
      { name: "tooltipBody",
      type: "text" }
        ]
    }
  ]
} as const satisfies Block
