import type { Block } from "payload"


export const IntegrationsBody = {
  slug: 'integrationsBody',
  admin: {
    disableBlockName: true,
  },
  fields: [
    
    {
      name: "buttonLabel",
      required: true,
      type: "text",
      defaultValue: "See the integration"
    }
  ]
} as const satisfies Block
