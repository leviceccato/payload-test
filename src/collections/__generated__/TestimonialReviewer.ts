import type { CollectionConfig } from "payload"

export const TestimonialReviewer = {
  slug: 'testimonial-reviewer',
  
  fields: [
    
    {
      name: "fullName",
      required: true,
      type: "text"
    },

    {
      name: "position",
      required: true,
      type: "text"
    },

    {
      name: "companyLogo",
      type: "upload",
      relationTo: "assets",
      filterOptions: {"mimeType":{"contains":["image"]}}
    },

    {
      name: "companyLogoOnLight",
      type: "upload",
      relationTo: "assets",
      filterOptions: {"mimeType":{"contains":["image"]}}
    },

    {
      name: "avatar",
      type: "upload",
      relationTo: "assets",
      filterOptions: {"mimeType":{"contains":["image"]}}
    }
  ]
} as const satisfies CollectionConfig
