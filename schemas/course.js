export default {
  name: 'course',
  title: 'Courses',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'object',
      fields: [
        {
          name: 'en',
          title: 'English',
          type: 'string',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'vi',
          title: 'Vietnamese',
          type: 'string',
          validation: (Rule) => Rule.required(),
        },
      ],
    },
    {
      name: 'description',
      title: 'Description',
      type: 'object',
      fields: [
        {
          name: 'en',
          title: 'English',
          type: 'text',
          rows: 3,
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'vi',
          title: 'Vietnamese',
          type: 'text',
          rows: 3,
          validation: (Rule) => Rule.required(),
        },
      ],
    },
    {
      name: 'duration',
      title: 'Duration',
      type: 'object',
      fields: [
        {
          name: 'en',
          title: 'English',
          type: 'string',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'vi',
          title: 'Vietnamese',
          type: 'string',
          validation: (Rule) => Rule.required(),
        },
      ],
    },
    {
      name: 'price',
      title: 'Price',
      type: 'object',
      fields: [
        {
          name: 'en',
          title: 'English',
          type: 'string',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'vi',
          title: 'Vietnamese',
          type: 'string',
          validation: (Rule) => Rule.required(),
        },
      ],
    },
    {
      name: 'image',
      title: 'Course Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'cost',
      title: 'Cost Images',
      type: 'array',
      description: 'Add images related to course cost',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
    },
    {
      name: 'detailsImage',
      title: 'Detail Images',
      type: 'array',
      description: 'Add multiple images to show in course details',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
    },
    {
      name: 'priceImages',
      title: 'Price Images',
      type: 'array',
      description: 'Add images related to pricing and payment options',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
    },
    {
      name: 'summary',
      title: 'Summary',
      type: 'object',
      fields: [
        {
          name: 'en',
          title: 'English',
          type: 'text',
          rows: 2,
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'vi',
          title: 'Vietnamese',
          type: 'text',
          rows: 2,
          validation: (Rule) => Rule.required(),
        },
      ],
    },
    {
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'en',
              title: 'English',
              type: 'string',
            },
            {
              name: 'vi',
              title: 'Vietnamese',
              type: 'string',
            },
          ],
        },
      ],
    },
    {
      name: 'certificateRequirements',
      title: 'Certificate Requirements',
      description: 'Add requirements for obtaining the certificate',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'en',
              title: 'English Requirement',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'vi',
              title: 'Vietnamese Requirement',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
          ],
          preview: {
            select: {
              title: 'en',
            },
          },
        },
      ],
      validation: (Rule) => Rule.min(1).error('At least one requirement is needed'),
    },
    {
      name: 'priceSection',
      title: 'Price Section',
      type: 'object',
      fields: [
        {
          name: 'mainText',
          title: 'Main Text',
          type: 'object',
          fields: [
            {
              name: 'en',
              title: 'English',
              type: 'string',
              validation: (Rule) => Rule.required(),
              initialValue: 'Including all study materials and certification',
            },
            {
              name: 'vi',
              title: 'Vietnamese',
              type: 'string',
              validation: (Rule) => Rule.required(),
              initialValue: 'Bao gồm tất cả các tài liệu học tập và chứng chỉ',
            },
          ],
        },
        {
          name: 'features',
          title: 'Price Features',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'en',
                  title: 'English',
                  type: 'string',
                  validation: (Rule) => Rule.required(),
                },
                {
                  name: 'vi',
                  title: 'Vietnamese',
                  type: 'string',
                  validation: (Rule) => Rule.required(),
                },
              ],
            },
          ],
          initialValue: [
            {
              en: 'High-quality curriculum and study materials',
              vi: 'Giáo trình và tài liệu học tập chất lượng cao',
            },
            {
              en: 'Direct guidance from experienced instructors',
              vi: 'Hướng dẫn trực tiếp từ giảng viên có kinh nghiệm',
            },
            {
              en: 'Internationally recognized certification',
              vi: 'Chứng chỉ được công nhận quốc tế',
            },
          ],
        },
      ],
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'isActive',
      title: 'Active',
      type: 'boolean',
      description: 'Set to false to hide this course',
      initialValue: true,
    },
  ],
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{field: 'order', direction: 'asc'}],
    },
  ],
  preview: {
    select: {
      title: 'title.en',
      media: 'image',
    },
  },
}