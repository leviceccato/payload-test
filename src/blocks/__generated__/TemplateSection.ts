import type { Block } from "payload"

export const TemplateSection = {
  slug: 'templateSection',
  admin: {
    disableBlockName: true,
  },
  fields: [
    
    {
      name: "sideBar",
      required: true,
      type: "blocks",
      blocks: [],
      blockReferences: ["templateCTA", "globalCTA"],
      minRows: 1,
      maxRows: 1
    },

    {
      name: "templateBody",
      required: true,
      type: "richText"
    }
  ]
} as const satisfies Block
