import type { Block } from "payload"


export const SocialMedia = {
  slug: 'socialMedia',
  admin: {
    disableBlockName: true,
  },
  fields: [
    
    {
      name: "icon",
      required: true,
      type: "upload",
      relationTo: "assets"
    },

    {
      name: "link",
      required: true,
      type: "text"
    }
  ]
} as const satisfies Block
