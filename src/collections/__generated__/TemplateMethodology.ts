import type { CollectionConfig } from "payload"


export const TemplateMethodology = {
  slug: 'templateMethodology',
  
  fields: [
    
    {
      name: "title",
      type: "text"
    },

    {
      name: "description",
      type: "text"
    },

    {
      name: "followAndIndex",
      type: "checkbox"
    },

    {
      name: "name",
      required: true,
      type: "text"
    },
// TODO: Create a tab (SEO: description,followAndIndex,title)
  ]
} as const satisfies CollectionConfig
