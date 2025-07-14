import type { CollectionConfig } from "payload"
import { lexicalEditor, BlocksFeature } from "@payloadcms/richtext-lexical"

export const Customer = {
  slug: 'customer',
  
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
      name: "customerInfo",
      type: "group",
      fields: [{ name: "customerTitle",
      required: true,
      admin: {"description":"This field will be show at customers list page and customer page hero."},
      type: "text" },
      { name: "customerBody",
      required: true,
      admin: {"description":"This field will be show at customers list page and customer page hero."},
      type: "textarea" },
      { name: "cover",
      required: true,
      admin: {"description":"This field will be show at customers list page."},
      type: "upload",
      relationTo: "assets",
      filterOptions: {"mimeType":{"contains":["image"]}} }
        ]
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
      name: "useCase",
      required: true,
      hasMany: false,
      type: "relationship",
      relationTo: ["customerUseCase"]
    },

    {
      name: "companySize",
      required: true,
      hasMany: false,
      type: "relationship",
      relationTo: ["customerCompanySize"]
    },

    {
      name: "customerRegion",
      hasMany: false,
      type: "relationship",
      relationTo: ["customerRegion"]
    },

    {
      name: "customerIndustry",
      required: true,
      hasMany: false,
      type: "relationship",
      relationTo: ["customerIndustry"]
    },

    {
      name: "summary",
      type: "group",
      fields: [{ name: "summaryTitle",
      required: true,
      type: "text" },
      { name: "summaryBody",
      required: true,
      type: "textarea" }
        ]
    },

    {
      name: "body",
      required: true,
      type: "richText",
      editor: lexicalEditor({ features: ({ rootFeatures }) => [...rootFeatures, BlocksFeature({ blocks: ["templateInfoGridThreeColumns","infoQuote","infoTip","inlineCTA","globalCTA","table","templateInfoAccordion","templateMedia"] })] })
    },

    {
      name: "blocks",
      required: true,
      type: "blocks",
      blocks: [],
      blockReferences: ["appreciation", "banner", "bookDemoMain", "clientLogotypes", "clientLogotypesCards", "cta", "ctaForm", "ctaSmall", "customComponent", "demos", "embedded", "embededMap", "features", "form", "globalClientLogotypes", "globalCTA", "globalInfoAccordion", "globalInfoCarousel", "globalInfoGrid", "globalInfoTabVariant", "globalInfoTextWithImage", "globalInfoWithCardsSection", "globalReviewsSection", "heroSubpages", "heroSubpagesCentered", "homeHero", "infoAccordion", "infoCarousel", "infoGrid", "infoGridCardsWithIcons", "infoGridTwoColumnsWithTitle", "infoGridWithHeading", "infoGridWithResources", "infoSlider", "infoSliderTimeline", "infoTabsWithDescriptions", "infoTabsWithIcon", "infoTextWithCollage", "infoTextWithImage", "infoWithCards", "insightComparison", "mainHero", "media", "mediaCollage", "pagination", "pricingTable", "pricingTableComparison", "resourcesHero", "reviews", "singleReview", "textBlock", "textLinks", "toggle"]
    }
  ]
} as const satisfies CollectionConfig
