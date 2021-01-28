export default {
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'tag',
      title: 'Tag',
      type: 'array',
      validation: x => x.required(),
      of: [
        {
          type: 'reference',
          to: {
            type: 'tag'
          }
        }
      ],
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'alt',
      title: 'Alternative text',
      type: 'string',
      validation: x => x.required()
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    },
  ],
}
