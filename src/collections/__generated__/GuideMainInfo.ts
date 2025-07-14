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
      type: "text",
      defaultValue: "Read more"
    },

    {
      name: "shareTitle",
      required: true,
      admin: {"description":"Text will be used for the sidebar table of content."},
      type: "text",
      defaultValue: "Share on:"
    },

    {
      name: "copiedTitle",
      required: true,
      type: "text",
      defaultValue: "Copied"
    },

    {
      name: "previousPageTitle",
      required: true,
      admin: {"description":"Text will be used for the guide pagination."},
      type: "text",
      defaultValue: "Previous page"
    },

    {
      name: "nextPageTitle",
      required: true,
      admin: {"description":"Text will be used for the guide pagination."},
      type: "text",
      defaultValue: "Next page"
    },

    {
      name: "finishTitle",
      required: true,
      admin: {"description":"Text will be used for the guide pagination."},
      type: "text",
      defaultValue: "Finish Reading"
    },

    {
      name: "completeTitle",
      required: true,
      admin: {"description":"Text will be used for the sidebar progress percentage."},
      type: "text",
      defaultValue: "complete"
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
