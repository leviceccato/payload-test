import type { Block } from "payload"


export const Banner = {
  slug: 'banner',
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
      name: "subtitle",
      required: true,
      type: "textarea"
    },

    {
      name: "backgroundColor",
      required: true,
      hasMany: false,
      type: "select",
      options: [{"label":"Neutral 06","value":"bg-neutral-06"},{"label":"Green 02","value":"bg-green-02"},{"label":"Yellow 04","value":"bg-yellow-04"},{"label":"Neutral 07","value":"bg-neutral-07"},{"label":"Pink 01","value":"bg-pink-01"},{"label":"Yellow/Pink Gradient","value":"yellow-pink-gradient"}]
    },

    {
      name: "mainImage",
      admin: {"description":"If you add a file here, the banner will use a second variant of design."},
      type: "upload",
      relationTo: "assets",
      filterOptions: {"mimeType":{"contains":["image"]}}
    },
// TODO: Create a group (undefined: leftTopImage,rightTopImage,leftBottomImage,rightBottomImage),
// TODO: Create a group (undefined: rightTopImageMobile,leftBottomImageMobile,rightBottomImageMobile,leftTopImageMobile),

    {
      name: "button",
      required: true,
      type: "blocks",
      blocks: [],
      blockReferences: ["button", "globalButtons"],
      minRows: 1,
      maxRows: 1
    },

    {
      name: "leftTopImage",
      type: "upload",
      relationTo: "assets",
      filterOptions: {"mimeType":{"contains":["image"]}}
    },

    {
      name: "rightTopImage",
      type: "upload",
      relationTo: "assets",
      filterOptions: {"mimeType":{"contains":["image"]}}
    },

    {
      name: "leftBottomImage",
      type: "upload",
      relationTo: "assets",
      filterOptions: {"mimeType":{"contains":["image"]}}
    },

    {
      name: "rightBottomImage",
      type: "upload",
      relationTo: "assets",
      filterOptions: {"mimeType":{"contains":["image"]}}
    },

    {
      name: "leftTopImageMobile",
      type: "upload",
      relationTo: "assets",
      filterOptions: {"mimeType":{"contains":["image"]}}
    },

    {
      name: "rightTopImageMobile",
      type: "upload",
      relationTo: "assets",
      filterOptions: {"mimeType":{"contains":["image"]}}
    },

    {
      name: "leftBottomImageMobile",
      type: "upload",
      relationTo: "assets",
      filterOptions: {"mimeType":{"contains":["image"]}}
    },

    {
      name: "rightBottomImageMobile",
      type: "upload",
      relationTo: "assets",
      filterOptions: {"mimeType":{"contains":["image"]}}
    }
  ]
} as const satisfies Block
