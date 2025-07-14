import type { CollectionConfig } from "payload"


export const CustomersMainPage = {
  slug: 'customersMainPage',
  
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
      name: "blocks",
      required: true,
      admin: {"description":"Any hero block must be on first place."},
      type: "blocks",
      blocks: [],
      blockReferences: ["appreciation", "banner", "bookDemoMain", "clientLogotypes", "clientLogotypesCards", "cta", "ctaForm", "ctaSmall", "customComponent", "demos", "embedded", "embededMap", "features", "form", "globalClientLogotypes", "globalCTA", "globalInfoAccordion", "globalInfoCarousel", "globalInfoGrid", "globalInfoTabVariant", "globalInfoTextWithImage", "globalInfoWithCardsSection", "globalReviewsSection", "heroSubpages", "heroSubpagesCentered", "homeHero", "infoAccordion", "infoCarousel", "infoGrid", "infoGridCardsWithIcons", "infoGridTwoColumnsWithTitle", "infoGridWithHeading", "infoGridWithResources", "infoSlider", "infoSliderTimeline", "infoTabsWithDescriptions", "infoTabsWithIcon", "infoTextWithCollage", "infoTextWithImage", "infoWithCards", "insightComparison", "mainHero", "media", "mediaCollage", "pagination", "pricingTable", "pricingTableComparison", "resourcesHero", "reviews", "singleReview", "textBlock", "textLinks", "toggle", "customersBody", "customersSection", "customersSideBar"]
    },

    {
      name: "followAndIndex",
      type: "checkbox",
      defaultValue: true
    }
  ]
} as const satisfies CollectionConfig
