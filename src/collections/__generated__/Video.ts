import type { CollectionConfig } from "payload"


export const Video = {
  slug: 'video',
  
  fields: [
    
    {
      name: "S E O",
      type: "group",
      fields: [{ name: "description",
      type: "text" },
      { name: "title",
      required: true,
      type: "text" },
      { name: "followAndIndex",
      type: "checkbox",
      defaultValue: true }
        ]
    },

    {
      name: "OG Image",
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
      name: "heroTemplate",
      required: true,
      type: "blocks",
      blocks: [],
      blockReferences: ["heroTemplate"],
      minRows: 1,
      maxRows: 1
    },

    {
      name: "embedVideo",
      required: true,
      admin: {"description":"You can pass here any embedded code to a video. You don't need to change only url in field."},
      type: "textarea"
    },

    {
      name: "durationMinutes",
      type: "number",
      min: 0
    },

    {
      name: "durationSeconds",
      admin: {"description":"This is not total seconds. It's the seconds in addition to the minutes, e.g. 5 minutes and 40 seconds."},
      type: "number",
      min: 0,
      max: 59
    },

    {
      name: "transcript",
      required: true,
      type: "richText"
    },

    {
      name: "shareTitle",
      required: true,
      type: "text",
      defaultValue: "Share on:"
    },

    {
      name: "copiedTitle",
      required: true,
      type: "text",
      defaultValue: "Copied"
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
      name: "Call To Action",
      required: true,
      type: "blocks",
      blocks: [],
      blockReferences: ["globalCTA"],
      minRows: 1,
      maxRows: 1
    },

    {
      name: "clientLogoTypes",
      required: true,
      type: "blocks",
      blocks: [],
      blockReferences: ["globalClientLogotypes"],
      minRows: 1,
      maxRows: 1
    }
  ]
} as const satisfies CollectionConfig
