import type { GlobalConfig } from "payload"


export const NotFoundPage = {
  slug: 'notFoundPage',
  
  fields: [
    
    {
      name: "SEO",
      type: "group",
      fields: [{ name: "title",
      type: "text" },
      { name: "description",
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
      name: "hero",
      required: true,
      type: "blocks",
      blocks: [],
      blockReferences: ["heroSubpages"],
      minRows: 1,
      maxRows: 1
    }
  ]
} as const satisfies GlobalConfig
