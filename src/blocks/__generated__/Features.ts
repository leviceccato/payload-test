import type { Block } from "payload"

export const Features = {
  slug: 'features',
  admin: {
    disableBlockName: true,
  },
  fields: [
    
    {
      name: "featureBlocks",
      type: "blocks",
      blocks: [],
      blockReferences: ["featureBlock"]
    }
  ]
} as const satisfies Block
