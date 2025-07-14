import type { CollectionConfig } from "payload"


export const TemplateUseCase = {
  slug: 'templateUseCase',
  
  fields: [
    
    {
      name: "name",
      required: true,
      type: "text"
    },

    {
      name: "SEO",
      type: "group",
      fields: [{ name: "description",
      type: "text" },
      { name: "followAndIndex",
      type: "checkbox" },
      { name: "title",
      type: "text" }
        ]
    }
  ]
} as const satisfies CollectionConfig
