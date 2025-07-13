import type { Block } from "payload"

export const TemplatesSection = {
  slug: 'templatesSection',
  admin: {
    disableBlockName: true,
  },
  fields: [
    
    {
      name: "leftBlocks",
      required: true,
      type: "blocks",
      blocks: [],
      blockReferences: ["templatesCTA", "templatesFilterBar", "globalCTA"],
      minRows: 1
    },

    {
      name: "rightBlock",
      required: true,
      type: "blocks",
      blocks: [],
      blockReferences: ["templatesBody", "pagination", "integrationsBody"],
      minRows: 1,
      maxRows: 2
    }
  ]
} as const satisfies Block
