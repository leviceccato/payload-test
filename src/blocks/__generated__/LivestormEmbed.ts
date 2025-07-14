import type { Block } from "payload"


export const LivestormEmbed = {
  slug: 'livestormEmbed',
  admin: {
    disableBlockName: true,
  },
  fields: [
    
    {
      name: "title",
      type: "text"
    },

    {
      name: "Embed HTML",
      required: true,
      type: "textarea"
    }
  ]
} as const satisfies Block
