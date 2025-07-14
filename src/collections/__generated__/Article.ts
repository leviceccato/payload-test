import type { CollectionConfig } from "payload"


export const Article = {
  slug: 'article',
  
  fields: [
    // TODO: Create a group (S E O: title,description,followAndIndex),

    {
      name: "lastUpdated",
      admin: {"date":{"pickerAppearance":"dayOnly"}},
      type: "date"
    },

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
      name: "globalTag",
      hasMany: true,
      type: "relationship",
      relationTo: ["globalTag"]
    },

    {
      name: "category",
      required: true,
      hasMany: false,
      type: "relationship",
      relationTo: ["articleCategory"]
    },

    {
      name: "author",
      required: true,
      hasMany: false,
      type: "relationship",
      relationTo: ["author"]
    },

    {
      name: "heroArticle",
      required: true,
      type: "blocks",
      blocks: [],
      blockReferences: ["heroArticle"],
      minRows: 1,
      maxRows: 1
    },

    {
      name: "blocks",
      type: "blocks",
      blocks: [],
      blockReferences: ["articleBody", "textBlock", "suggestedArticles", "globalClientLogotypes", "globalCTA", "cta", "ctaForm", "ctaSmall", "clientLogotypes", "authorBioBox"]
    }
  ]
} as const satisfies CollectionConfig
