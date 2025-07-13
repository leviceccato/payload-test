import type { Block } from "payload"

export const InfoQuote = {
  slug: 'infoQuote',
  admin: {
    disableBlockName: true,
  },
  fields: [
    
    {
      name: "title",
      required: true,
      type: "textarea"
    },

    {
      name: "image",
      type: "upload",
      relationTo: "assets",
      filterOptions: {"mimeType":{"contains":["image"]}}
    },

    {
      name: "representative",
      hasMany: false,
      type: "relationship",
      relationTo: ["testimonial-reviewer"]
    }
  ]
} as const satisfies Block
