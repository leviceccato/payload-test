import type { Block } from "payload"

export const NavBarCategoryLink = {
  slug: 'navBarCategoryLink',
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
      name: "link",
      required: true,
      type: "text"
    }
  ]
} as const satisfies Block
