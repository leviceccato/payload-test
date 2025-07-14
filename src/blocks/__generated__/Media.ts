import type { Block } from "payload"


export const Media = {
  slug: 'media',
  admin: {
    disableBlockName: true,
  },
  fields: [
    
    {
      name: "embed",
      admin: {"description":"Generic embeds have more priority than YouTube embeds and video fields. "},
      type: "textarea"
    },

    {
      name: "YouTube Embed",
      admin: {"description":"YouTube embeds have more priority than video fields."},
      type: "textarea"
    },

    {
      name: "assetDesktop",
      type: "upload",
      relationTo: "assets",
      filterOptions: {"mimeType":{"contains":[]}}
    },

    {
      name: "assetMobile",
      type: "upload",
      relationTo: "assets"
    },

    {
      name: "size",
      required: true,
      hasMany: false,
      type: "select",
      options: [{"label":"Parallax","value":"parallax"},{"label":"Height 780px","value":"780"},{"label":"Height 885px","value":"885"}]
    }
  ]
} as const satisfies Block
