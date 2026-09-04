import type { CollectionConfig } from 'payload';

export const Posts: CollectionConfig = {
  slug: 'posts',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'category', 'status', 'publishedAt'],
  },
  access: {
    read: ({ req: { user } }) => {
      if (user) return true;
      return {
        status: {
          equals: 'published',
        },
      };
    },
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: "Titre de l'article",
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        position: 'sidebar',
      },
      hooks: {
        beforeValidate: [
          ({ data, operation }) => {
            if (operation === 'create' || operation === 'update') {
              if (data && data.title && !data.slug) {
                return data.title
                  .toLowerCase()
                  .normalize('NFD')
                  .replace(/[\u0300-\u036f]/g, '')
                  .replace(/[^a-z0-9]+/g, '-')
                  .replace(/^-+|-+$/g, '');
              }
            }
            return data?.slug;
          },
        ],
      },
    },
    {
      name: 'excerpt',
      type: 'textarea',
      label: 'Extrait / Résumé',
      required: true,
    },
    {
      name: 'featuredImage',
      type: 'upload',
      relationTo: 'media',
      label: 'Image à la une',
      required: false,
    },
    {
      name: 'authorName',
      type: 'text',
      label: "Nom de l'auteur",
      defaultValue: 'Équipe JIM DISTRIBUTION',
    },
    {
      name: 'authorDesignation',
      type: 'text',
      label: "Fonction de l'auteur",
      defaultValue: 'Direction Commerciale & Logistique',
    },
    {
      name: 'authorImage',
      type: 'upload',
      relationTo: 'media',
      label: "Photo de l'auteur",
    },
    {
      name: 'category',
      type: 'relationship',
      relationTo: 'categories',
      label: 'Catégorie',
      hasMany: false,
    },
    {
      name: 'tags',
      type: 'array',
      label: 'Tags / Mots-clés',
      fields: [
        {
          name: 'tag',
          type: 'text',
        },
      ],
    },
    {
      name: 'content',
      type: 'richText',
      label: 'Contenu détaillé',
    },
    {
      name: 'publishedAt',
      type: 'date',
      admin: {
        position: 'sidebar',
        date: {
          pickerAppearance: 'dayAndTime',
        },
      },
      defaultValue: () => new Date(),
    },
    {
      name: 'status',
      type: 'select',
      defaultValue: 'published',
      options: [
        { label: 'Brouillon', value: 'draft' },
        { label: 'Publié', value: 'published' },
      ],
      admin: {
        position: 'sidebar',
      },
      required: true,
    },
    // SEO fields
    {
      name: 'metaTitle',
      type: 'text',
      label: 'Meta Title (SEO)',
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'metaDescription',
      type: 'textarea',
      label: 'Meta Description (SEO)',
      admin: {
        position: 'sidebar',
      },
    },
  ],
};
