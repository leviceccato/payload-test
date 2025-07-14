import type { Block } from "payload"


export const RichTitleSegment = {
  slug: 'richTitleSegment',
  admin: {
    disableBlockName: true,
  },
  fields: [
    
    {
      name: "content",
      type: "text"
    }
  ]
} as const satisfies Block
