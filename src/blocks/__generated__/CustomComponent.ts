import type { Block } from "payload"


export const CustomComponent = {
  slug: 'customComponent',
  admin: {
    disableBlockName: true,
  },
  fields: [
    
    {
      name: "backgroundColor",
      required: true,
      hasMany: false,
      type: "select",
      options: [{"label":"Neutral 06","value":"bg-neutral-06"},{"label":"Neutral 07","value":"bg-neutral-07"},{"label":"Yellow 04","value":"bg-yellow-04"}]
    },

    {
      name: "content",
      type: "blocks",
      blocks: [],
      blockReferences: ["liveWebsiteTestingHero", "liveWebsiteTestingPanel", "liveWebsiteTestingSites", "liveWebsiteTestingTasks", "liveWebsiteTestingCapture"],
      maxRows: 1
    }
  ]
} as const satisfies Block
