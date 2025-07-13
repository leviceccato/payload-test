import type { CollectionConfig } from "payload"

export const Compare = {
  slug: 'compare',
  
  fields: [
    // TODO: Create a group (S E O: followAndIndex,title,description),

    {
      name: "followAndIndex",
      type: "checkbox"
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
      name: "title",
      required: true,
      type: "text"
    },

    {
      name: "description",
      type: "text"
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
      name: "buttons",
      admin: {"description":"CTA buttons shown in hero section"},
      type: "blocks",
      blocks: [],
      blockReferences: ["button", "globalButtons"],
      minRows: 1,
      maxRows: 2
    },

    {
      name: "cover",
      required: true,
      type: "upload",
      relationTo: "media"
    },

    {
      name: "body",
      required: true,
      type: "richText"
    },

    {
      name: "blocks",
      type: "blocks",
      blocks: [],
      blockReferences: ["infoAccordion", "richText"]
    }
  ]
} as const satisfies CollectionConfig
