import type { Block } from "payload"


export const InfoGridWithHeading = {
  slug: 'infoGridWithHeading',
  admin: {
    disableBlockName: true,
  },
  fields: [
    
    {
      name: "heading",
      type: "group",
      fields: [{ name: "title",
      required: true,
      type: "text" },
      { name: "icon",
      required: true,
      type: "upload",
      relationTo: "assets" },
      { name: "backgroundColor",
      required: true,
      hasMany: false,
      type: "select",
      options: [{"label":"Yellow 03","value":"bg-yellow-03"},{"label":"Pink 04","value":"bg-pink-04"},{"label":"Purple 04","value":"bg-purple-04"},{"label":"Blue 04","value":"bg-blue-04"}] }
        ]
    },

    {
      name: "bottomLineSeperator",
      type: "checkbox",
      defaultValue: true
    },

    {
      name: "cardsBlock",
      type: "group",
      fields: [{ name: "cardTag",
      required: true,
      type: "text" },
      { name: "cardButtonLabel",
      required: true,
      type: "text" }
        ]
    },

    {
      name: "contentType",
      required: true,
      hasMany: false,
      type: "select",
      options: [{"label":"Articles","value":"articles"},{"label":"Guides","value":"guides"},{"label":"Videos","value":"videos"},{"label":"Templates","value":"templates"},{"label":"Events","value":"events"},{"label":"Reports","value":"reports"}]
    }
  ]
} as const satisfies Block
