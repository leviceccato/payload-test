import type { CollectionConfig } from "payload"
import { lexicalEditor, BlocksFeature } from "@payloadcms/richtext-lexical"

export const Compare = {
  slug: 'compare',
  
  fields: [
    // TODO: Create a group (S E O: followAndIndex,title,description),

    {
      name: "followAndIndex",
      type: "checkbox"
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
      name: "title",
      required: true,
      type: "text"
    },

    {
      name: "description",
      type: "text"
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
      name: "buttons",
      admin: {"description":"CTA buttons shown in hero section"},
      type: "blocks",
      blocks: [],
      blockReferences: ["button", "globalButtons"],
      minRows: 1,
      maxRows: 2
    },

    {
      name: "cover",
      required: true,
      type: "upload",
      relationTo: "assets"
    },

    {
      name: "body",
      required: true,
      type: "richText",
      editor: lexicalEditor({ features: ({ rootFeatures }) => [...rootFeatures, BlocksFeature({ blocks: ["globalCTA","infoQuote","infoTip","inlineCTA","table","templateInfoAccordion","templateInfoGridThreeColumns","templateMedia","grid","compareTable","richText","infoAccordion"] })] })
    },

    {
      name: "blocks",
      type: "blocks",
      blocks: [],
      blockReferences: ["infoAccordion", "richText"]
    }
  ]
} as const satisfies CollectionConfig
