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
// TODO: Create a group (undefined: searchResultsTitle,emptySearchTitle,searchLengthValidationTitle,searchPlaceholder,searchGlobalTagContentType,searchFeatureContentType,searchCustomerMainPageContentType,searchCustomerContentType,searchSolutionContentType,searchPricingUseCaseContentType,searchPricingMainPageContentType,searchArticleContentType,searchBlogMainPageContentType,searchVideoContentType,searchVideoMainPageContentType,searchGuidesMainPageContentType,searchGuideMainPageContentType,searchTemplatesMainPageContentType,searchTemplateContentType,searchLegalPageContentType,searchLandingPageContentType,searchPageContentType,searchGuideMainInfoContentType),

    {
      name: "searchResultsTitle",
      required: true,
      type: "text"
    },

    {
      name: "emptySearchTitle",
      required: true,
      type: "text"
    },

    {
      name: "searchLengthValidationTitle",
      required: true,
      type: "text"
    },

    {
      name: "searchPlaceholder",
      required: true,
      type: "text"
    },

    {
      name: "searchPageContentType",
      required: true,
      type: "text"
    },

    {
      name: "menuItems",
      type: "blocks",
      blocks: [],
      blockReferences: ["navBarGroup"],
      maxRows: 5
    },

    {
      name: "searchGlobalTagContentType",
      required: true,
      type: "text"
    },

    {
      name: "searchFeatureContentType",
      required: true,
      type: "text"
    },

    {
      name: "searchCustomerMainPageContentType",
      required: true,
      type: "text"
    },

    {
      name: "searchCustomerContentType",
      required: true,
      type: "text"
    },

    {
      name: "searchSolutionContentType",
      required: true,
      type: "text"
    },

    {
      name: "searchPricingUseCaseContentType",
      required: true,
      type: "text"
    },

    {
      name: "searchPricingMainPageContentType",
      required: true,
      type: "text"
    },

    {
      name: "searchArticleContentType",
      required: true,
      type: "text"
    },

    {
      name: "searchBlogMainPageContentType",
      required: true,
      type: "text"
    },

    {
      name: "searchVideoContentType",
      required: true,
      type: "text"
    },

    {
      name: "searchVideoMainPageContentType",
      required: true,
      type: "text"
    },

    {
      name: "searchGuidesMainPageContentType",
      required: true,
      type: "text"
    },

    {
      name: "searchGuideMainPageContentType",
      required: true,
      type: "text"
    },

    {
      name: "searchTemplatesMainPageContentType",
      required: true,
      type: "text"
    },

    {
      name: "searchTemplateContentType",
      required: true,
      type: "text"
    },

    {
      name: "searchLegalPageContentType",
      required: true,
      type: "text"
    },

    {
      name: "searchLandingPageContentType",
      required: true,
      type: "text"
    },

    {
      name: "searchGuideMainInfoContentType",
      required: true,
      type: "text"
    }
  ]
} as const satisfies CollectionConfig
