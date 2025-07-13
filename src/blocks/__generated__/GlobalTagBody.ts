import type { Block } from "payload"

export const GlobalTagBody = {
  slug: 'globalTagBody',
  admin: {
    disableBlockName: true,
  },
  fields: [
    
    {
      name: "videoLabel",
      required: true,
      type: "text"
    },

    {
      name: "videoButtonLabel",
      required: true,
      type: "text"
    },

    {
      name: "guideLabel",
      required: true,
      type: "text"
    },

    {
      name: "guideButtonLabel",
      required: true,
      type: "text"
    },

    {
      name: "articleLabel",
      required: true,
      type: "text"
    },

    {
      name: "articleBodyLabel",
      required: true,
      type: "text"
    },

    {
      name: "templateLabel",
      required: true,
      type: "text"
    },

    {
      name: "templateButtonLabel",
      required: true,
      type: "text"
    },

    {
      name: "customersLabel",
      required: true,
      type: "text"
    },

    {
      name: "customerStoryButtonLabel",
      required: true,
      type: "text"
    }
  ]
} as const satisfies Block
