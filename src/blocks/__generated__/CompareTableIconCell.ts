import type { Block } from "payload"

export const CompareTableIconCell = {
  slug: 'compareTableIconCell',
  admin: {
    disableBlockName: true,
  },
  fields: [
    
    {
      name: "type",
      hasMany: false,
      type: "select",
      options: [{"label":"Tick","value":"tick"},{"label":"Cross","value":"cross"},{"label":"Dash","value":"dash"}],
      defaultValue: "tick"
    }
  ]
} as const satisfies Block
