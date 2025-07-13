import type { Block } from "payload"

export const InfoWithCards = {
  slug: 'infoWithCards',
  admin: {
    disableBlockName: true,
  },
  fields: [
    
    {
      name: "featureBlock",
      required: true,
      type: "blocks",
      blocks: [],
      blockReferences: ["infoCard"],
      minRows: 1,
      maxRows: 1
    },

    {
      name: "blocks",
      type: "blocks",
      blocks: [],
      blockReferences: ["infoCard"],
      minRows: 1,
      maxRows: 4
    }
  ]
} as const satisfies Block
