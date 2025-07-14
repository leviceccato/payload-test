import type { Block } from "payload"


export const InfoSliderTimeline = {
  slug: 'infoSliderTimeline',
  admin: {
    disableBlockName: true,
  },
  fields: [
    
    {
      name: "slides",
      required: true,
      type: "blocks",
      blocks: [],
      blockReferences: ["timelineSlide"]
    }
  ]
} as const satisfies Block
