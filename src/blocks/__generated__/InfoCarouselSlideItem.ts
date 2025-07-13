import type { Block } from "payload"

export const InfoCarouselSlideItem = {
  slug: 'infoCarouselSlideItem',
  admin: {
    disableBlockName: true,
  },
  fields: [
    
    {
      name: "title",
      required: true,
      type: "text"
    },

    {
      name: "icon",
      required: true,
      type: "upload",
      relationTo: "media",
      filterOptions: {"mimeType":{"contains":["image"]}}
    }
  ]
} as const satisfies Block
