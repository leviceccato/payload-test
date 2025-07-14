import type { CollectionConfig } from "payload"
import { lexicalEditor, BlocksFeature } from "@payloadcms/richtext-lexical"

export const Integration = {
  slug: 'integration',
  
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
      name: "heroTitle",
      required: true,
      type: "text"
    },

    {
      name: "heroBody",
      required: true,
      type: "textarea"
    },

    {
      name: "button",
      admin: {"description":"CTA button shown in hero section"},
      type: "blocks",
      blocks: [],
      blockReferences: ["button", "globalButtons"],
      minRows: 1,
      maxRows: 1
    },

    {
      name: "buttonSubtext",
      type: "text"
    },

    {
      name: "cover",
      type: "upload",
      relationTo: "assets",
      filterOptions: {"mimeType":{"contains":["image"]}}
    },

    {
      name: "sideBar",
      required: true,
      type: "blocks",
      blocks: [],
      blockReferences: ["tableOfContent"],
      minRows: 1,
      maxRows: 1
    },

    {
      name: "body",
      required: true,
      type: "richText",
      editor: lexicalEditor({ features: ({ rootFeatures }) => [...rootFeatures, BlocksFeature({ blocks: ["templateInfoGridThreeColumns","infoQuote","infoTip","inlineCTA","globalCTA","table","templateInfoAccordion","templateMedia"] })] })
    }
  ]
} as const satisfies CollectionConfig
