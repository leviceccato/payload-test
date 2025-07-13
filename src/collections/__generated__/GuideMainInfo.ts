import type { CollectionConfig } from "payload"

export const GuideMainInfo = {
  slug: 'guideMainInfo',
  
  fields: [
    
    {
      name: "title",
      required: true,
      type: "text"
    },

    {
      name: "body",
      required: true,
      type: "textarea"
    },

    {
      // TODO: unhandled multilink field attributes 'link_scope'
name: "linkToFirstPage",
      required: true,
      type: "text"
    },

    {
      name: "buttonText",
      required: true,
      admin: {"description":"Text will be used for the button, which is used in the guides list."},
      type: "text"
    },

    {
      name: "shareTitle",
      required: true,
      admin: {"description":"Text will be used for the sidebar table of content."},
      type: "text"
    },

    {
      name: "copiedTitle",
      required: true,
      type: "text"
    },

    {
      name: "previousPageTitle",
      required: true,
      admin: {"description":"Text will be used for the guide pagination."},
      type: "text"
    },

    {
      name: "nextPageTitle",
      required: true,
      admin: {"description":"Text will be used for the guide pagination."},
      type: "text"
    },

    {
      name: "finishTitle",
      required: true,
      admin: {"description":"Text will be used for the guide pagination."},
      type: "text"
    },

    {
      name: "completeTitle",
      required: true,
      admin: {"description":"Text will be used for the sidebar progress percentage."},
      type: "text"
    },

    {
      name: "globalTag",
      hasMany: true,
      type: "relationship",
      relationTo: ["globalTag"]
    },

    {
      name: "cover",
      required: true,
      type: "upload",
      relationTo: "assets",
      filterOptions: {"mimeType":{"contains":["image"]}}
    },

    {
      name: "shareLinkedin",
      type: "checkbox",
      defaultValue: true
    },

    {
      name: "shareFacebook",
      type: "checkbox",
      defaultValue: true
    },

    {
      name: "shareEmail",
      type: "checkbox",
      defaultValue: true
    },

    {
      name: "shareTwitter",
      type: "checkbox",
      defaultValue: true
    },

    {
      name: "copyLink",
      type: "checkbox",
      defaultValue: true
    }
  ]
} as const satisfies CollectionConfig
