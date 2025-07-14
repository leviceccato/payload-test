import type { Block } from "payload"


export const MainHero = {
  slug: 'mainHero',
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
      name: "button",
      type: "blocks",
      blocks: [],
      blockReferences: ["button", "globalButtons"],
      minRows: 1,
      maxRows: 2
    },

    {
      name: "caption",
      type: "text"
    },

    {
      name: "rating",
      hasMany: false,
      type: "relationship",
      relationTo: ["rating"]
    },

    {
      name: "mobileImage",
      type: "upload",
      relationTo: "assets",
      filterOptions: {"mimeType":{"contains":["image"]}}
    },
// TODO: Create a group (undefined: leftPart,rightPart),
// TODO: Create a group (undefined: bannerBody,bannerLabel,bannerLink),

    {
      name: "bannerBody",
      type: "text"
    },

    {
      name: "bannerLabel",
      type: "text"
    },

    {
      name: "bannerLink",
      type: "text"
    },

    {
      name: "leftPart",
      required: true,
      admin: {"description":"Lottie JSON file or image"},
      type: "upload",
      relationTo: "assets"
    },

    {
      name: "rightPart",
      required: true,
      admin: {"description":"Lottie JSON file or image"},
      type: "upload",
      relationTo: "assets",
      filterOptions: {"mimeType":{"contains":[]}}
    }
  ]
} as const satisfies Block
