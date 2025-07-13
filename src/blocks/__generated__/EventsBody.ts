import type { Block } from "payload"

export const EventsBody = {
  slug: 'eventsBody',
  admin: {
    disableBlockName: true,
  },
  fields: [
    
    {
      name: "title",
      type: "text"
    }
  ]
} as const satisfies Block
