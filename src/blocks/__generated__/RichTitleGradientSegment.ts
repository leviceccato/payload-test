import type { Block } from "payload"

export const RichTitleGradientSegment = {
  slug: 'richTitleGradientSegment',
  admin: {
    disableBlockName: true,
  },
  fields: [
    
    {
      name: "content",
      type: "text"
    },

    {
      name: "gradient",
      hasMany: false,
      type: "select",
      options: [{"label":"Blue","value":"blue"},{"label":"Pink","value":"pink"}]
    },

    {
      name: "gradientTopOffset",
      type: "number"
    },

    {
      name: "gradientRightOffset",
      type: "number"
    },

    {
      name: "gradientBottomOffset",
      type: "number"
    },

    {
      name: "gradientLeftOffset",
      type: "number"
    }
  ]
} as const satisfies Block
