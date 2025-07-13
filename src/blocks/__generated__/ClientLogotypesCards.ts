import type { Block } from "payload"

export const ClientLogotypesCards = {
  slug: 'clientLogotypesCards',
  admin: {
    disableBlockName: true,
  },
  fields: [
    
    {
      name: "backgroundColor",
      required: true,
      hasMany: false,
      type: "select",
      options: [{"label":"Yellow 04","value":"bg-yellow-04"},{"label":"Neutral 07","value":"bg-neutral-07"},{"label":"Green 02","value":"bg-green-02"}]
    },

    {
      name: "images",
      required: true,
      admin: {"description":"Minimal images count - 8 Maximum images count - 18"},
      type: "upload",
      relationTo: "media",
      hasMany: true,
      filterOptions: {"mimeType":{"contains":["image"]}}
    }
  ]
} as const satisfies Block
