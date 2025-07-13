import type { Block } from "payload"

export const SingleReview = {
  slug: 'singleReview',
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
      name: "backgroundColor",
      required: true,
      hasMany: false,
      type: "select",
      options: [{"label":"Green 02","value":"bg-green-02"},{"label":"Pink 02","value":"bg-pink-02"},{"label":"Green 04","value":"bg-green-04"}]
    },

    {
      name: "imagePosition",
      required: true,
      hasMany: false,
      type: "select",
      options: [{"label":"Image left","value":"left"},{"label":"Image right","value":"right"}]
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
