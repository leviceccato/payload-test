import type { GlobalConfig } from "payload"

export const Favicon = {
  slug: 'favicon',
  
  fields: [
    
    {
      name: "favicon",
      required: true,
      type: "upload",
      relationTo: "media",
      filterOptions: {"mimeType":{"contains":["image"]}}
    }
  ]
} as const satisfies GlobalConfig
