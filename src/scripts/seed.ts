import { getPayloadClient } from '../lib/payload';

async function seed() {
  console.log('Initializing Payload CMS...');
  const payload = await getPayloadClient();

  console.log('Checking existing posts...');
  const existingPosts = await payload.find({
    collection: 'posts',
    limit: 1,
  });

  if (existingPosts.totalDocs === 0) {
    console.log('Creating default Category...');
    const category = await payload.create({
      collection: 'categories',
      data: {
        name: 'Distribution Agroalimentaire',
        slug: 'distribution-agroalimentaire',
        description: 'Actualités et analyses sur la distribution FMCG au Maroc.',
      },
    });

    console.log('Creating initial Blog Post...');
    await payload.create({
      collection: 'posts',
      data: {
        title: 'Optimisation de la chaîne de distribution FMCG au Nord du Maroc',
        slug: 'optimisation-chaine-distribution-fmcg-nord-maroc',
        excerpt:
          'Comment JIM DISTRIBUTION structure ses flux logistiques et ses partenariats commerciaux pour assurer un approvisionnement continu des points de vente.',
        authorName: 'Équipe JIM DISTRIBUTION',
        authorDesignation: 'Direction Logistique',
        category: category.id,
        tags: [{ tag: 'Logistique' }, { tag: 'FMCG' }, { tag: 'Maroc' }],
        status: 'published',
        publishedAt: new Date().toISOString(),
        content: {
          root: {
            type: 'root',
            format: '',
            indent: 0,
            version: 1,
            direction: 'ltr',
            children: [
              {
                type: 'paragraph',
                format: '',
                indent: 0,
                version: 1,
                children: [
                  {
                    type: 'text',
                    text: 'Le secteur de la distribution agroalimentaire au Maroc connaît une transformation majeure, portée par la modernisation des points de vente et les exigences accrues en matière de ponctualité et de disponibilité des stocks.',
                    format: 0,
                    version: 1,
                  },
                ],
              },
              {
                type: 'heading',
                tag: 'h3',
                format: '',
                indent: 0,
                version: 1,
                children: [
                  {
                    type: 'text',
                    text: 'Une présence stratégique au service des marques',
                    format: 0,
                    version: 1,
                  },
                ],
              },
              {
                type: 'paragraph',
                format: '',
                indent: 0,
                version: 1,
                children: [
                  {
                    type: 'text',
                    text: 'Grâce à une couverture rigoureuse et une proximité étroite avec les commerces de détail et les grossistes, JIM DISTRIBUTION garantit le déploiement optimal des marques partenaires dans l ensemble des zones cibles du Nord marocain.',
                    format: 0,
                    version: 1,
                  },
                ],
              },
            ],
          },
        } as any,
        metaTitle: 'Optimisation de la distribution FMCG au Maroc | JIM DISTRIBUTION',
        metaDescription: 'Découvrez notre approche professionnelle pour la distribution agroalimentaire et FMCG.',
      },
    });

    console.log('Seed completed successfully!');
  } else {
    console.log('Posts already exist in the database.');
  }

  process.exit(0);
}

seed().catch((err) => {
  console.error('Seed error:', err);
  process.exit(1);
});
