import type { Block } from "payload"


export const SideBarCtaBlock = {
  slug: 'sideBarCtaBlock',
  admin: {
    disableBlockName: true,
  },
  fields: [
    
    {
      name: "blocks",
      type: "blocks",
      blocks: [],
      blockReferences: ["globalCTA"]
    }
  ]
} as const satisfies Block
