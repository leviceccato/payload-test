import type { CollectionConfig } from "payload"

export const Template = {
  slug: 'template',
  
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
      name: "templateId",
      required: true,
      type: "text"
    },

    {
      name: "globalTag",
      hasMany: true,
      type: "relationship",
      relationTo: ["globalTag"]
    },

    {
      name: "useCase",
      required: true,
      hasMany: true,
      type: "relationship",
      relationTo: ["templateUseCase"]
    },

    {
      name: "team",
      required: true,
      hasMany: true,
      type: "relationship",
      relationTo: ["templateTeam"]
    },

    {
      name: "methodology",
      required: true,
      hasMany: true,
      type: "relationship",
      relationTo: ["templateMethodology"]
    },

    {
      name: "industry",
      hasMany: true,
      type: "relationship",
      relationTo: ["templateIndustry"]
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
      name: "blocks",
      type: "blocks",
      blocks: [],
      blockReferences: ["heroTemplate", "textBlock", "suggestedTemplates", "templateSection", "singleReview", "globalClientLogotypes", "globalCTA", "ctaForm", "cta", "ctaSmall", "globalReviewsSection"]
    }
  ]
} as const satisfies CollectionConfig
