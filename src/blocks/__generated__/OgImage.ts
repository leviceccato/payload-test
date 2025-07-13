import type { Block } from "payload"

export const OgImage = {
  slug: 'ogImage',
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
      name: "description",
      required: true,
      type: "textarea"
    },

    {
      name: "type",
      required: true,
      admin: {"description":"Fields 'publishedTime' and 'modifiedTime' available only for type and page Article. Field 'author' avaialble only for types Article and Book and for page Article."},
      hasMany: false,
      type: "select",
      options: [{"label":"Website","value":"website"},{"label":"Article","value":"article"},{"label":"Book","value":"book"},{"label":"Profile","value":"profile"},{"label":"Music Song","value":"music.song"},{"label":"Music Album","value":"music.album"},{"label":"Music Playlist","value":"music.playlist"},{"label":"Music Rado Station","value":"music.radio_station"},{"label":"Video Movie","value":"video.movie"},{"label":"Video Episode","value":"video.episode"},{"label":"Video TV Show","value":"video.tv_show"},{"label":"Video Other","value":"video.other"}],
      defaultValue: "website"
    },

    {
      name: "image",
      required: true,
      type: "upload",
      relationTo: "assets"
    },

    {
      name: "tag",
      admin: {"description":"You can use the field only with specific types and specific pages. The types, when the tag will be works - Article, Book, Video Movie, Video Episode The pages, where you can use the tag field - Templates, Video, Article, Guide"},
      type: "text"
    }
  ]
} as const satisfies Block
