import type { Block } from "payload"

export const InfoGridCardsWithIcons = {
  slug: 'infoGridCardsWithIcons',
  admin: {
    disableBlockName: true,
  },
  fields: [
    
    {
      name: "backgroundColor",
      required: true,
      hasMany: false,
      type: "select",
      options: [{"label":"Green 04","value":"bg-green-04"},{"label":"Green 02","value":"bg-green-02"},{"label":"Yellow 04","value":"bg-yellow-04"},{"label":"Blue 04","value":"bg-blue-04"},{"label":"Neutral 06","value":"bg-neutral-06"},{"label":"Neutral 07","value":"bg-neutral-07"}]
    },

    {
      name: "cards",
      type: "blocks",
      blocks: [],
      blockReferences: ["gridCard"],
      maxRows: 5
    }
  ]
} as const satisfies Block
