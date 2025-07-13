import type { Block } from "payload"

export const NavBarLink = {
  slug: 'navBarLink',
  admin: {
    disableBlockName: true,
  },
  fields: [
    
    {
      name: "title",
      required: true,
      type: "text"
    },

    {
      name: "subtitle",
      required: true,
      type: "text"
    },

    {
      name: "link",
      required: true,
      type: "text"
    }
  ]
} as const satisfies Block
