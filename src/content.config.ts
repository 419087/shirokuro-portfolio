import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const worksCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/works" }),
  
  schema: ({ image: imageHelper }) => z.object({
    title: z.string(),
    publishDate: z.coerce.date(),
    description: z.string(),
    tags: z.array(z.string()),
    image: imageHelper().optional(),
  }),
});

export const collections = {
  'works': worksCollection,
};