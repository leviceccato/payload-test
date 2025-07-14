import type { CollectionConfig } from "payload"


export const Event = {
  slug: 'event',
  
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
      name: "date",
      required: true,
      type: "date",
      admin: {"date":{"pickerAppearance":"dayOnly"}}
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
      name: "blocks",
      type: "blocks",
      blocks: [],
      blockReferences: ["articleBody", "textBlock", "suggestedArticles", "globalClientLogotypes", "globalCTA", "cta", "ctaForm", "ctaSmall", "clientLogotypes"]
    }
  ]
} as const satisfies CollectionConfig
