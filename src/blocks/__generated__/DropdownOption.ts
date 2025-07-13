import type { Block } from "payload"

export const DropdownOption = {
  slug: 'dropdownOption',
  admin: {
    disableBlockName: true,
  },
  fields: [
    
    {
      name: "name",
      required: true,
      type: "text"
    },

    {
      name: "value",
      required: true,
      type: "text"
    }
  ]
} as const satisfies Block
