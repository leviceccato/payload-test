import type { Block } from "payload"

export const EventPage = {
  slug: 'eventPage',
  admin: {
    disableBlockName: true,
  },
  fields: [
    // TODO: Create a group (S E O: followAndIndex,title,description),

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
      admin: {"description":"If field will be empty, page will be use default Navigation Bar."},
      hasMany: false,
      type: "relationship",
      relationTo: ["footer"]
    },

    {
      name: "cover",
      required: true,
      type: "upload",
      relationTo: "assets",
      filterOptions: {"mimeType":{"contains":["image"]}}
    },

    {
      name: "globalTag",
      hasMany: true,
      type: "relationship",
      relationTo: ["globalTag"]
    },

    {
      name: "livestormEmbed",
      required: true,
      type: "textarea"
    },

    {
      name: "shareTitle",
      required: true,
      type: "text"
    },

    {
      name: "copiedTitle",
      required: true,
      type: "text"
    },

    {
      name: "shareFacebook",
      type: "checkbox",
      defaultValue: true
    },

    {
      name: "shareTwitter",
      type: "checkbox",
      defaultValue: true
    },

    {
      name: "shareLinkedin",
      type: "checkbox",
      defaultValue: true
    },

    {
      name: "shareEmail",
      type: "checkbox",
      defaultValue: true
    },

    {
      name: "copyLink",
      type: "checkbox",
      defaultValue: true
    },

    {
      name: "cta",
      required: true,
      type: "blocks",
      blocks: [],
      blockReferences: ["globalCTA"],
      minRows: 1,
      maxRows: 1
    }
  ]
} as const satisfies Block
