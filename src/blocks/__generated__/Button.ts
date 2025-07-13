import type { Block } from "payload"

export const Button = {
  slug: 'button',
  admin: {
    disableBlockName: true,
  },
  fields: [
    
    {
      name: "label",
      required: true,
      type: "text"
    },

    {
      name: "link",
      required: true,
      admin: {"description":"When you add value for \\\"Scroll To\\\" field, link will be overwrite."},
      type: "text"
    },

    {
      name: "buttonType",
      required: true,
      hasMany: false,
      type: "select",
      options: [{"label":"Primary M","value":"primary-m"},{"label":"Primary S","value":"primary-s"},{"label":"Primary Full Width","value":"primary-width"},{"label":"Secondary M","value":"secondary-m"},{"label":"Secondary Full Width","value":"secondary-width"}]
    },

    {
      name: "backgroundColor",
      required: true,
      hasMany: false,
      type: "select",
      options: [{"label":"Green 02","value":"bg-green-02"},{"label":"Neutral 07","value":"bg-neutral-07"},{"label":"Transparent","value":"bg-transparent"},{"label":"Neutral 01","value":"bg-neutral-01"}]
    },

    {
      name: "eventName",
      admin: {"description":"If the field is filled, an analytics event will sent to the segment."},
      type: "text"
    },

    {
      name: "scrollTo",
      admin: {"description":"You need add the same value which you add to block field \\\"Ref to scroll to\\\"."},
      type: "text"
    }
  ]
} as const satisfies Block
