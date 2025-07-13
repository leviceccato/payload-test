import type { CollectionConfig } from "payload"

export const Guide = {
  slug: 'guide',
  
  fields: [
    // TODO: Create a group (S E O: title,description,followAndIndex),

    {
      name: "followAndIndex",
      type: "checkbox",
      defaultValue: true
    },

    {
      name: "title",
      required: true,
      type: "text"
    },

    {
      name: "description",
      required: true,
      type: "text"
    },

    {
      name: "ogImage",
      type: "blocks",
      blocks: [],
      blockReferences: ["ogImage"],
      maxRows: 1
    },

    {
      name: "navigationBar",
      admin: {"description":"If field will be empty, page will be use default Navigation Bar."},
      hasMany: false,
      type: "relationship",
      relationTo: ["navigationBar"]
    },

    {
      name: "footer",
      admin: {"description":"If field will be empty, page will be use default Footer."},
      hasMany: false,
      type: "relationship",
      relationTo: ["footer"]
    },

    {
      name: "position",
      required: true,
      admin: {"description":"For SEO optimization, page with position 1 must have default slug"},
      type: "number"
    },

    {
      name: "heroTitle",
      required: true,
      type: "text"
    },

    {
      name: "heroBody",
      required: true,
      type: "textarea"
    },

    {
      name: "body",
      required: true,
      type: "richText"
    }
  ]
} as const satisfies CollectionConfig
