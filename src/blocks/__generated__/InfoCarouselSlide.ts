import type { Block } from "payload"

export const InfoCarouselSlide = {
  slug: 'infoCarouselSlide',
  admin: {
    disableBlockName: true,
  },
  fields: [
    
    {
      name: "image",
      required: true,
      type: "upload",
      relationTo: "media"
    },

    {
      name: "backgroundColor",
      required: true,
      hasMany: false,
      type: "select",
      options: [{"label":"Yellow 03","value":"bg-yellow-03"},{"label":"Neutral 06","value":"bg-neutral-06"},{"label":"Blue 04","value":"bg-blue-04"},{"label":"Pink 04","value":"bg-pink-04"},{"label":"Purple 04","value":"bg-purple-04"},{"label":"Red 05","value":"bg-red-05"},{"label":"Pink 05","value":"bg-pink-05"},{"label":"Green 04","value":"bg-green-04"},{"label":"Green 02","value":"bg-green-02"},{"label":"Neutral 07","value":"bg-neutral-07"}]
    },

    {
      name: "title",
      required: true,
      type: "text"
    },

    {
      name: "subtitle",
      required: true,
      type: "textarea"
    },

    {
      name: "items",
      type: "blocks",
      blocks: [],
      blockReferences: ["infoCarouselSlideItem"],
      maxRows: 4
    }
  ]
} as const satisfies Block
