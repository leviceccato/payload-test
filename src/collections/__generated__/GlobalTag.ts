import type { CollectionConfig } from "payload"

export const GlobalTag = {
  slug: 'globalTag',
  
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
      admin: {"description":"If field will be empty, page will be use default Footer."},
      hasMany: false,
      type: "relationship",
      relationTo: ["footer"]
    },

    {
      name: "globalTagTitle",
      required: true,
      type: "text"
    },

    {
      name: "blocks",
      required: true,
      admin: {"description":"Any hero block must be on first place."},
      type: "blocks",
      blocks: [],
      blockReferences: ["pagination", "globalCTA", "globalTagBody", "globalClientLogotypes", "resourcesHero", "cta", "ctaForm", "ctaSmall", "clientLogotypes"]
    },

    {
      name: "followAndIndex",
      type: "checkbox",
      defaultValue: true
    }
  ]
} as const satisfies CollectionConfig
