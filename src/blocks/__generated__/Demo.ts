import type { Block } from "payload"


export const Demo = {
  slug: 'demo',
  admin: {
    disableBlockName: true,
  },
  fields: [
    
    {
      name: "title",
      required: true,
      type: "text"
    },

    {
      name: "body",
      required: true,
      type: "richText"
    },

    {
      name: "media",
      required: true,
      admin: {"description":"Can be Rive animations or images"},
      type: "upload",
      relationTo: "assets"
    },

    {
      name: "duration",
      admin: {"description":"Duration the demo will be shown in milliseconds, not providing a value will assume an infinite duration"},
      type: "number",
      defaultValue: ""
    }
  ]
} as const satisfies Block
