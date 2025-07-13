import type { GlobalConfig } from "payload"

export const IntegrationsMainPage = {
  slug: 'integrationsMainPage',
  
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
      name: "blocks",
      required: true,
      admin: {"description":"Any hero block must be on first place."},
      type: "blocks",
      blocks: [],
      blockReferences: ["resourcesHero", "globalCTA", "globalClientLogotypes", "ctaForm", "cta", "clientLogotypes", "ctaSmall", "templatesSection"]
    }
  ]
} as const satisfies GlobalConfig
