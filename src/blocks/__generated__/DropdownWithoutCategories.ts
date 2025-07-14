import type { Block } from "payload"


export const DropdownWithoutCategories = {
  slug: 'dropdownWithoutCategories',
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
      name: "body",
      required: true,
      type: "text"
    },

    {
      name: "button",
      type: "group",
      fields: [{ name: "label",
      type: "text" },
      { name: "link",
      type: "text" },
      { name: "eventName",
      type: "text" }
        ]
    },

    {
      name: "featureBlock",
      type: "group",
      fields: [{ name: "featureImage",
      type: "upload",
      relationTo: "assets" },
      { name: "featureTitle",
      type: "text" },
      { name: "featureBody",
      type: "text" },
      { name: "featureButtonLabel",
      type: "text" },
      { name: "featureLink",
      type: "text" },
      { name: "featureBackgroundColor",
      hasMany: false,
      type: "select",
      options: [{"label":"bg-green-04","value":"bg-green-04"},{"label":"bg-green-02","value":"bg-green-02"},{"label":"bg-yellow-04","value":"bg-yellow-04"},{"label":"bg-blue-04","value":"bg-blue-04"},{"label":"bg-neutral-06","value":"bg-neutral-06"},{"label":"bg-purple-04/40","value":"bg-purple-04/40"}] }
        ]
    },

    {
      name: "sublinks",
      required: true,
      type: "blocks",
      blocks: [],
      blockReferences: ["navBarLink"]
    }
  ]
} as const satisfies Block
