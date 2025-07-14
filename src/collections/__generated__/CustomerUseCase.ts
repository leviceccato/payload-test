import type { CollectionConfig } from "payload"


export const CustomerUseCase = {
  slug: 'customerUseCase',
  
  fields: [
    
    {
      name: "name",
      required: true,
      type: "text"
    }
  ]
} as const satisfies CollectionConfig
