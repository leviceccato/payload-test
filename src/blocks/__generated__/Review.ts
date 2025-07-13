import type { Block } from "payload"

export const Review = {
  slug: 'review',
  admin: {
    disableBlockName: true,
  },
  fields: [
    
    {
      name: "text",
      required: true,
      type: "textarea"
    },

    {
      name: "tag",
      type: "text"
    },

    {
      name: "representative",
      required: true,
      hasMany: false,
      type: "relationship",
      relationTo: ["testimonial-reviewer"]
    },

    {
      name: "image",
      required: true,
      type: "upload",
      relationTo: "media",
      filterOptions: {"mimeType":{"contains":["image"]}}
    }
  ]
} as const satisfies Block
