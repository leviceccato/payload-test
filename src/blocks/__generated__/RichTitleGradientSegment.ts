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
      type: "number",
      min: 0,
      max: 1,
      admin: {"step":0.1},
      defaultValue: "0"
    },

    {
      name: "gradientRightOffset",
      type: "number",
      min: 0,
      max: 1,
      admin: {"step":0.1},
      defaultValue: "0"
    },

    {
      name: "gradientBottomOffset",
      type: "number",
      min: 0,
      max: 1,
      admin: {"step":0.1},
      defaultValue: "0"
    },

    {
      name: "gradientLeftOffset",
      type: "number",
      min: 0,
      max: 1,
      admin: {"step":0.1},
      defaultValue: "0"
    }
  ]
} as const satisfies Block
