import type { CollectionConfig } from "payload"


export const NavigationBarMenuItems = {
  slug: 'navigationBarMenuItems',
  
  fields: [
    
    {
      name: "logotypeLink",
      required: true,
      type: "text"
    },

    {
      name: "logoButtonLabel",
      type: "text"
    },

    {
      name: "logoButtonLink",
      type: "text"
    },

    {
      name: "search",
      type: "group",
      fields: [{ name: "searchResultsTitle",
      required: true,
      type: "text",
      defaultValue: "Results" },
      { name: "emptySearchTitle",
      required: true,
      type: "text",
      defaultValue: "Oops, nothing was found" },
      { name: "searchLengthValidationTitle",
      required: true,
      type: "text",
      defaultValue: "Search starts with three characters" },
      { name: "searchPlaceholder",
      required: true,
      type: "text",
      defaultValue: "Search" },
      { name: "searchGlobalTagContentType",
      required: true,
      type: "text",
      defaultValue: "Global Tag" },
      { name: "searchFeatureContentType",
      required: true,
      type: "text",
      defaultValue: "Feature" },
      { name: "searchCustomerMainPageContentType",
      required: true,
      type: "text",
      defaultValue: "Customers" },
      { name: "searchCustomerContentType",
      required: true,
      type: "text",
      defaultValue: "Customer" },
      { name: "searchSolutionContentType",
      required: true,
      type: "text",
      defaultValue: "Solution" },
      { name: "searchPricingUseCaseContentType",
      required: true,
      type: "text",
      defaultValue: "Pricing Use Case" },
      { name: "searchPricingMainPageContentType",
      required: true,
      type: "text",
      defaultValue: "Pricing" },
      { name: "searchArticleContentType",
      required: true,
      type: "text",
      defaultValue: "Article" },
      { name: "searchBlogMainPageContentType",
      required: true,
      type: "text",
      defaultValue: "Blog" },
      { name: "searchVideoContentType",
      required: true,
      type: "text",
      defaultValue: "Video" },
      { name: "searchVideoMainPageContentType",
      required: true,
      type: "text",
      defaultValue: "Videos" },
      { name: "searchGuidesMainPageContentType",
      required: true,
      type: "text",
      defaultValue: "Guides" },
      { name: "searchGuideMainPageContentType",
      required: true,
      type: "text",
      defaultValue: "Guide" },
      { name: "searchTemplatesMainPageContentType",
      required: true,
      type: "text",
      defaultValue: "Templates" },
      { name: "searchTemplateContentType",
      required: true,
      type: "text",
      defaultValue: "Template" },
      { name: "searchLegalPageContentType",
      required: true,
      type: "text",
      defaultValue: "Legal" },
      { name: "searchLandingPageContentType",
      required: true,
      type: "text",
      defaultValue: "Landing" },
      { name: "searchPageContentType",
      required: true,
      type: "text",
      defaultValue: "Page" },
      { name: "searchGuideMainInfoContentType",
      required: true,
      type: "text",
      defaultValue: "Guide" }
        ]
    },

    {
      name: "Menu Items",
      type: "blocks",
      blocks: [],
      blockReferences: ["navBarGroup"],
      maxRows: 5
    }
  ]
} as const satisfies CollectionConfig
