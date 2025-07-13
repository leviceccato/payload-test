import type { CollectionConfig } from "payload"

export const NavigationBar = {
  slug: 'navigationBar',
  
  fields: [
    
    {
      name: "backgroundColor",
      required: true,
      hasMany: false,
      type: "select",
      options: [{"label":"Neutral 07","value":"bg-neutral-07"},{"label":"Neutral 06","value":"bg-neutral-06"},{"label":"Neutral 05","value":"bg-neutral-05"},{"label":"Green 04","value":"bg-green-04"},{"label":"Green 02","value":"bg-green-02"},{"label":"Yellow 04","value":"bg-yellow-04"},{"label":"Yellow 03","value":"bg-yellow-04"},{"label":"Yellow 01","value":"bg-yellow-01"},{"label":"Purple 04","value":"bg-neutral-06"},{"label":"Blue 04","value":"bg-neutral-06"},{"label":"Red 05","value":"bg-neutral-06"},{"label":"Pink 05","value":"bg-neutral-06"},{"label":"Pink 04","value":"bg-pink-04"},{"label":"Blue 05","value":"bg-blue-05"}]
    },

    {
      name: "buttons",
      type: "blocks",
      blocks: [],
      blockReferences: ["button", "globalButtons"],
      maxRows: 2
    },

    {
      name: "logotype",
      required: true,
      type: "upload",
      relationTo: "media",
      filterOptions: {"mimeType":{"contains":["image"]}}
    },

    {
      name: "searchHidden",
      type: "checkbox"
    },

    {
      name: "menuItems",
      hasMany: false,
      type: "relationship",
      relationTo: ["navigationBarMenuItems"]
    }
  ]
} as const satisfies CollectionConfig
