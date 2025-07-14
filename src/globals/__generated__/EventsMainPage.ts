import type { GlobalConfig } from "payload"


export const EventsMainPage = {
  slug: 'eventsMainPage',
  
  fields: [
    
    {
      name: "S E O",
      type: "group",
      fields: [{ name: "followAndIndex",
      type: "checkbox",
      defaultValue: true },
      { name: "title",
      required: true,
      type: "text" },
      { name: "description",
      required: true,
      type: "text" }
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
      name: "blocks",
      required: true,
      admin: {"description":"Any hero block must be on first place."},
      type: "blocks",
      blocks: [],
      blockReferences: ["resourcesHero", "featureArticle", "filterBar", "articleBody", "pagination", "globalClientLogotypes", "globalCTA", "cta", "ctaForm", "ctaSmall", "clientLogotypes", "livestormEmbed", "eventsBody"]
    }
  ]
} as const satisfies GlobalConfig
