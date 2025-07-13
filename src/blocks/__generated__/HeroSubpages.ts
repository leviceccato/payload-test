import type { Block } from "payload"

export const HeroSubpages = {
  slug: 'heroSubpages',
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
      name: "button",
      type: "blocks",
      blocks: [],
      blockReferences: ["button", "globalButtons"],
      maxRows: 2
    },

    {
      name: "iconButton",
      type: "blocks",
      blocks: [],
      blockReferences: ["iconButton"],
      maxRows: 1
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
      options: [{"label":"Neutral 05","value":"bg-neutral-05"},{"label":"Yellow 03","value":"bg-yellow-03"},{"label":"Purple 04","value":"bg-purple-04"},{"label":"Yellow 04","value":"bg-yellow-04"},{"label":"Green 04","value":"bg-green-04"},{"label":"Neutral 06","value":"bg-neutral-06"},{"label":"Blue 04","value":"bg-blue-04"},{"label":"Red 05","value":"bg-red-05"},{"label":"Green 02","value":"bg-green-02"},{"label":"Pink 05","value":"bg-pink-05"},{"label":"Pink 04","value":"bg-pink-04"}]
    },

    {
      name: "media",
      type: "upload",
      relationTo: "media",
      filterOptions: {"mimeType":{"contains":["image","video"]}}
    },

    {
      name: "customComponent",
      type: "blocks",
      blocks: [],
      blockReferences: ["liveWebsiteTestingHero"],
      maxRows: 1
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
    }
  ]
} as const satisfies Block
