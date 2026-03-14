import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const worksCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/works" }),
  
  schema: z.object({
    title: z.string(),
    publishDate: z.coerce.date(),
    description: z.string(),
    tags: z.array(z.string()),
    image: z.string().optional(),
  }),
});

export const collections = {
  'works': worksCollection,
};