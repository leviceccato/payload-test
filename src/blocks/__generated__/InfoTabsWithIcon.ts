import type { Block } from "payload"

export const InfoTabsWithIcon = {
  slug: 'infoTabsWithIcon',
  admin: {
    disableBlockName: true,
  },
  fields: [
    
    {
      name: "heading",
      type: "text"
    },

    {
      name: "headingImage",
      type: "upload",
      relationTo: "media",
      filterOptions: {"mimeType":{"contains":["image"]}}
    },

    {
      name: "body",
      type: "text"
    },

    {
      name: "backgroundColour",
      hasMany: false,
      type: "select",
      options: [{"label":"Neutral 07","value":"bg-neutral-07"},{"label":"Green 01","value":"bg-green-01"}],
      defaultValue: "bg-neutral-07"
    },

    {
      name: "tabImage",
      admin: {"description":"If this field is empty then individual tab images will be used, otherwise this image will be shown persistently."},
      type: "upload",
      relationTo: "media",
      filterOptions: {"mimeType":{"contains":["image"]}}
    },

    {
      name: "tabs",
      required: true,
      type: "blocks",
      blocks: [],
      blockReferences: ["infoIconTab"],
      minRows: 1,
      maxRows: 10
    }
  ]
} as const satisfies Block
