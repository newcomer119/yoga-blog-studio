export default {
    name: 'gallery',
    title: 'Gallery',
    type: 'document',
    fields: [
      {
        name: 'images',
        title: 'Gallery Images',
        type: 'array',
        of: [
          {
            type: 'image',
            options: {
              hotspot: true // Enables hotspot for better image cropping
            },
            fields: [
              {
                name: 'alt',
                title: 'Alt Text',
                type: 'string',
                description: 'Alternative text for accessibility'
              },
              {
                name: 'caption',
                title: 'Caption',
                type: 'string',
                description: 'Optional caption for the image'
              }
            ]
          }
        ],
        validation: Rule => Rule.min(1).error('At least one image is required')
      }
    ]
  }