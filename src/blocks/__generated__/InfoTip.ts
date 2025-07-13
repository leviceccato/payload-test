import type { Block } from "payload"

export const InfoTip = {
  slug: 'infoTip',
  admin: {
    disableBlockName: true,
  },
  fields: [
    
    {
      name: "body",
      required: true,
      type: "richText"
    },

    {
      name: "backgroundColor",
      required: true,
      hasMany: false,
      type: "select",
      options: [{"label":"Neutral 05","value":"bg-neutral-05"},{"label":"Yellow 03","value":"bg-yellow-03"},{"label":"Blue 04","value":"bg-blue-04"},{"label":"Green 02","value":"bg-green-02"},{"label":"Pink 04","value":"bg-pink-04"},{"label":"Pink 05","value":"bg-pink-05"},{"label":"Yellow 04","value":"bg-yellow-04"}]
    },

    {
      name: "icon",
      required: true,
      type: "upload",
      relationTo: "assets",
      filterOptions: {"mimeType":{"contains":["image"]}}
    }
  ]
} as const satisfies Block
