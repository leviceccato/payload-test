import type { CollectionConfig } from "payload"


export const GlobalTag = {
  slug: 'globalTag',
  
  fields: [
    
    {
      name: "S E O",
      type: "group",
      fields: [{ name: "title",
      required: true,
      type: "text" },
      { name: "description",
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
    }
  ]
} as const satisfies CollectionConfig
