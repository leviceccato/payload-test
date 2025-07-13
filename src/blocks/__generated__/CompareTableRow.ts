import type { Block } from "payload"

export const CompareTableRow = {
  slug: 'compareTableRow',
  admin: {
    disableBlockName: true,
  },
  fields: [
    
    {
      name: "cells",
      required: true,
      type: "blocks",
      blocks: [],
      blockReferences: ["compareTableIconCell", "compareTableTextCell"],
      minRows: 2,
      maxRows: 5
    }
  ]
} as const satisfies Block
