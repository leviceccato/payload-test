import type { Block } from "payload"


export const CtaSmall = {
  slug: 'ctaSmall',
  admin: {
    disableBlockName: true,
  },
  fields: [
    
    {
      name: "button",
      type: "blocks",
      blocks: [],
      blockReferences: ["button", "globalButtons"],
      minRows: 1,
      maxRows: 1
    },

    {
      name: "mobileMargin",
      required: true,
      admin: {"description":"The field control top and bottom margin for mobile version."},
      hasMany: false,
      type: "select",
      options: [{"label":"Without margin","value":"0"},{"label":"Margin 20px","value":"20"}]
    },

    {
      name: "scrollToElement",
      admin: {"description":"If you fill this field, button on click will be scroll to element, where you will add the same value."},
      type: "text"
    }
  ]
} as const satisfies Block
