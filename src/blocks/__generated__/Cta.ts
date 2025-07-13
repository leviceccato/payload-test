import type { Block } from "payload"

export const Cta = {
  slug: 'cta',
  admin: {
    disableBlockName: true,
  },
  fields: [
    
    {
      name: "marginTop",
      required: true,
      hasMany: false,
      type: "select",
      options: [{"label":"Big (80px)","value":"80"},{"label":"Small (40px)","value":"40"},{"label":"None","value":"0"}]
    },

    {
      name: "backgroundColor",
      required: true,
      hasMany: false,
      type: "select",
      options: [{"label":"Yellow 04","value":"bg-yellow-04"},{"label":"Neutral 07","value":"bg-neutral-07"},{"label":"Pink 01","value":"bg-pink-01"},{"label":"Yellow/pink gradient","value":"yellow-pink-gradient"},{"label":"Blue/pink gradient","value":"blue-pink-gradient"}]
    },

    {
      name: "isContained",
      admin: {"description":"Determines if this CTA should be within a contained block or bleed to the edges of the screen."},
      type: "checkbox"
    },

    {
      name: "title",
      type: "text"
    },

    {
      name: "richTitle",
      admin: {"description":"If this field is populated then anything in title will be overridden."},
      type: "blocks",
      blocks: [],
      blockReferences: ["richTitleGradientSegment", "richTitleSegment", "richTitleUsersSegment"]
    },

    {
      name: "subtitle",
      type: "textarea"
    },

    {
      name: "caption",
      type: "text"
    },

    {
      name: "buttons",
      required: true,
      type: "blocks",
      blocks: [],
      blockReferences: ["button", "globalButtons"],
      minRows: 1,
      maxRows: 2
    },

    {
      name: "rating",
      hasMany: false,
      type: "relationship",
      relationTo: ["rating"]
    },

    {
      name: "leftAsset",
      type: "upload",
      relationTo: "assets",
      filterOptions: {"mimeType":{"contains":[]}}
    },

    {
      name: "rightAsset",
      type: "upload",
      relationTo: "assets"
    }
  ]
} as const satisfies Block
