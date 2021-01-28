export default {
    name: 'tag',
    title: 'Tag',
    type: 'document',
    fields: [
        {
            name: 'tag',
            titel: 'Tag',
            type: 'string'
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'tag'
            },
            validation: rule => rule.required()
        }
    ]
}