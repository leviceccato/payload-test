import type { Block } from "payload"

export const AuthorBioBox = {
  slug: 'authorBioBox',
  admin: {
    disableBlockName: true,
  },
  fields: [
    
    {
      name: "author",
      hasMany: false,
      type: "relationship",
      relationTo: ["author"]
    }
  ]
} as const satisfies Block
