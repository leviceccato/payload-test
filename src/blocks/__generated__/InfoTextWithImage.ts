import type { Block } from "payload"


export const InfoTextWithImage = {
  slug: 'infoTextWithImage',
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
      name: "subtitle",
      required: true,
      type: "textarea"
    },

    {
      name: "Content Type",
      admin: {"description":"The value must be equal with \\\"Text link with icon\\\" component field"},
      hasMany: false,
      type: "select",
      options: [{"label":"Articles","value":"articles"},{"label":"Videos","value":"videos"},{"label":"Guides","value":"guides"},{"label":"Templates","value":"templates"},{"label":"Events","value":"events"},{"label":"Reports","value":"reports"}]
    },

    {
      name: "backgroundColor",
      required: true,
      hasMany: false,
      type: "select",
      options: [{"label":"Neutral 06","value":"bg-neutral-06"},{"label":"Neutral 07","value":"bg-neutral-07"},{"label":"Yellow 04","value":"bg-yellow-04"}]
    },

    {
      name: "imagePosition",
      hasMany: false,
      type: "select",
      options: [{"label":"Right","value":"right"},{"label":"Left","value":"left"}]
    },

    {
      name: "",
      type: "upload",
      relationTo: "assets",
      filterOptions: {"mimeType":{"contains":["image","video"]}}
    },

    {
      name: "customComponent",
      type: "blocks",
      blocks: [],
      blockReferences: ["liveWebsiteTestingHero", "liveWebsiteTestingPanel", "liveWebsiteTestingSites", "liveWebsiteTestingTasks"],
      maxRows: 1
    },

    {
      name: "textLink",
      type: "blocks",
      blocks: [],
      blockReferences: ["textLinkButton"],
      maxRows: 1
    },

    {
      name: "items",
      type: "blocks",
      blocks: [],
      blockReferences: ["infoText"]
    }
  ]
} as const satisfies Block
