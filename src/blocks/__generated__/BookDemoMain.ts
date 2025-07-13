import type { Block } from "payload"

export const BookDemoMain = {
  slug: 'bookDemoMain',
  admin: {
    disableBlockName: true,
  },
  fields: [
    
    {
      name: "body",
      type: "richText"
    },

    {
      name: "logos",
      type: "upload",
      relationTo: "assets",
      hasMany: true,
      filterOptions: {"mimeType":{"contains":["image"]}}
    },

    {
      name: "rating",
      hasMany: false,
      type: "relationship",
      relationTo: ["rating"]
    },

    {
      name: "embed",
      type: "textarea"
    }
  ]
} as const satisfies Block
