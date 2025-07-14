import type { CollectionConfig } from "payload"
import { lexicalEditor, BlocksFeature } from "@payloadcms/richtext-lexical"

export const Guide = {
  slug: 'guide',
  
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
      name: "position",
      required: true,
      admin: {"description":"For SEO optimization, page with position 1 must have default slug"},
      type: "number"
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
      name: "body",
      required: true,
      type: "richText",
      editor: lexicalEditor({ features: ({ rootFeatures }) => [...rootFeatures, BlocksFeature({ blocks: ["templateInfoGridThreeColumns","infoQuote","infoTip","inlineCTA","globalCTA","table","templateInfoAccordion","templateMedia","tableRichText","embedded"] })] })
    }
  ]
} as const satisfies CollectionConfig
