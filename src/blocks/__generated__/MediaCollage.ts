import type { Block } from "payload"


export const MediaCollage = {
  slug: 'mediaCollage',
  admin: {
    disableBlockName: true,
  },
  fields: [
    
    {
      name: "firstLine",
      required: true,
      admin: {"description":"You need to select 3 images."},
      type: "upload",
      relationTo: "assets",
      hasMany: true,
      filterOptions: {"mimeType":{"contains":["image"]}}
    },

    {
      name: "secondLine",
      required: true,
      admin: {"description":"You need to select 5 images."},
      type: "upload",
      relationTo: "assets",
      hasMany: true,
      filterOptions: {"mimeType":{"contains":["image"]}}
    }
  ]
} as const satisfies Block
