import type { GlobalConfig } from "payload"


export const TemplatesMainPage = {
  slug: 'templatesMainPage',
  
  fields: [
    // TODO: Create a group (S E O: title,description,followAndIndex),

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
      admin: {"description":"If field will be empty, page will be use default Navigation Bar."},
      hasMany: false,
      type: "relationship",
      relationTo: ["footer"]
    },

    {
      name: "blocks",
      admin: {"description":"Any hero block must be on first place."},
      type: "blocks",
      blocks: [],
      blockReferences: ["resourcesHero", "templatesSection", "globalClientLogotypes", "globalCTA", "cta", "clientLogotypes", "ctaForm", "ctaSmall"]
    },

    {
      name: "followAndIndex",
      type: "checkbox",
      defaultValue: true
    }
  ]
} as const satisfies GlobalConfig
