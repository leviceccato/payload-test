import type { Block } from "payload"


export const InfoSlider = {
  slug: 'infoSlider',
  admin: {
    disableBlockName: true,
  },
  fields: [
    
    {
      name: "backgroundColour",
      admin: {"description":"Defaults to bg-neutral-07"},
      hasMany: false,
      type: "select",
      options: [{"label":"bg-neutral-07","value":"bg-neutral-07"},{"label":"bg-yellow-04","value":"bg-yellow-04"}],
      defaultValue: "bg-neutral-07"
    },

    {
      name: "link",
      type: "text"
    },

    {
      name: "linkLabel",
      type: "text"
    },

    {
      name: "slides",
      type: "blocks",
      blocks: [],
      blockReferences: ["infoSlide"]
    }
  ]
} as const satisfies Block
