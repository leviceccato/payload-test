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
      relationTo: "media",
      filterOptions: {"mimeType":{"contains":["image"]}}
    },

    {
      name: "companyLogoOnLight",
      type: "upload",
      relationTo: "media",
      filterOptions: {"mimeType":{"contains":["image"]}}
    },

    {
      name: "avatar",
      type: "upload",
      relationTo: "media",
      filterOptions: {"mimeType":{"contains":["image"]}}
    }
  ]
} as const satisfies CollectionConfig
