import type { Block } from "payload"
import { EXPERIMENTAL_TableFeature, lexicalEditor } from "@payloadcms/richtext-lexical"

export const Appreciation = {
  slug: 'appreciation',
  admin: {
    disableBlockName: true,
  },
  fields: [
    
    {
      name: "review",
      hasMany: false,
      type: "relationship",
      relationTo: ["globalReviews"]
    },

    {
      name: "stats",
      type: "richText",
      editor: lexicalEditor({ features: () => [EXPERIMENTAL_TableFeature()], admin: { hideGutter: true, hideInsertParagraphAtEnd: true } })
    }
  ]
} as const satisfies Block
