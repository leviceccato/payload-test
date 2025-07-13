import type { Block } from "payload"

export const ClientLogotypes = {
  slug: 'clientLogotypes',
  admin: {
    disableBlockName: true,
  },
  fields: [
    
    {
      name: "subtitle",
      type: "textarea"
    },

    {
      name: "subtitleAlignment",
      admin: {"description":"Defaults to left"},
      hasMany: false,
      type: "select",
      options: [{"label":"Left","value":"left"},{"label":"Centre","value":"centre"}],
      defaultValue: "left"
    },

    {
      name: "logos",
      required: true,
      type: "upload",
      relationTo: "assets",
      hasMany: true,
      filterOptions: {"mimeType":{"contains":["image"]}}
    },

    {
      name: "bottomDivider",
      required: true,
      hasMany: false,
      type: "select",
      options: [{"label":"No divider","value":"0"},{"label":"Divider With Margin","value":"50"}]
    },

    {
      name: "mobileBottomDivider",
      type: "checkbox"
    },

    {
      name: "marginTop",
      required: true,
      hasMany: false,
      type: "select",
      options: [{"label":"Big (80)","value":"80"},{"label":"No margin","value":"0"}]
    },

    {
      name: "backgroundColor",
      required: true,
      hasMany: false,
      type: "select",
      options: [{"label":"Yellow 04","value":"bg-yellow-04"},{"label":"Neutral 07","value":"bg-neutral-07"},{"label":"Green 02","value":"bg-green-02"}]
    }
  ]
} as const satisfies Block
