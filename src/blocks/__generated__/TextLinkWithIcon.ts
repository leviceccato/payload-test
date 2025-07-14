import type { Block } from "payload"


export const TextLinkWithIcon = {
  slug: 'textLinkWithIcon',
  admin: {
    disableBlockName: true,
  },
  fields: [
    
    {
      name: "label",
      required: true,
      type: "text"
    },

    {
      name: "hoverColor",
      required: true,
      hasMany: false,
      type: "select",
      options: [{"label":"Yellow 03","value":"bg-yellow-03"},{"label":"Pink 04","value":"bg-pink-04"},{"label":"Purple 04","value":"bg-purple-04"},{"label":"Blue 04","value":"bg-blue-04"},{"label":"Red 04","value":"bg-red-04"}]
    },

    {
      name: "link",
      type: "text"
    },

    {
      name: "contentType",
      admin: {"description":"If the field is empty, the button will be navigated by a provided link in another field. The page will scroll to \\\"Info Grid With Heading\\\" with the same content type by button press."},
      hasMany: false,
      type: "select",
      options: [{"label":"Articles","value":"articles"},{"label":"Videos","value":"videos"},{"label":"Guides","value":"guides"},{"label":"Templates","value":"templates"},{"label":"Events","value":"events"},{"label":"Reports","value":"reports"}]
    },

    {
      name: "icon",
      required: true,
      type: "upload",
      relationTo: "assets"
    }
  ]
} as const satisfies Block
