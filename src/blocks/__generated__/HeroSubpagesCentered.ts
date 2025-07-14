import type { Block } from "payload"


export const HeroSubpagesCentered = {
  slug: 'heroSubpagesCentered',
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
      name: "body",
      required: true,
      type: "textarea"
    },

    {
      name: "backgroundColor",
      required: true,
      hasMany: false,
      type: "select",
      options: [{"label":"Neutral 05","value":"bg-neutral-05"},{"label":"Yellow 03","value":"bg-yellow-03"},{"label":"Purple 04","value":"bg-purple-04"},{"label":"Yellow 04","value":"bg-yellow-04"},{"label":"Green 04","value":"bg-green-04"},{"label":"Neutral 06","value":"bg-neutral-06"},{"label":"Blue 04","value":"bg-blue-04"},{"label":"Red 05","value":"bg-red-05"},{"label":"Green 02","value":"bg-green-02"},{"label":"Pink 05","value":"bg-pink-05"},{"label":"Pink 04","value":"bg-pink-04"},{"label":"Neutral 07","value":"bg-neutral-07"}]
    },

    {
      name: "topLeftImage",
      type: "upload",
      relationTo: "assets",
      filterOptions: {"mimeType":{"contains":["image"]}}
    },

    {
      name: "topLeftImageSize",
      hasMany: false,
      type: "select",
      options: [{"label":"Small","value":"small"},{"label":"Large","value":"large"}]
    },

    {
      name: "bottomRightImage",
      type: "upload",
      relationTo: "assets",
      filterOptions: {"mimeType":{"contains":["image"]}}
    },

    {
      name: "topRightMobileImage",
      type: "upload",
      relationTo: "assets",
      filterOptions: {"mimeType":{"contains":["image"]}}
    },

    {
      name: "bottomRightMobileImage",
      type: "upload",
      relationTo: "assets",
      filterOptions: {"mimeType":{"contains":["image"]}}
    }
  ]
} as const satisfies Block
