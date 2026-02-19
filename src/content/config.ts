import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    headline: z.string(),
    deck: z.string(),
    pillar: z.enum([
      'Pipeline Reality',
      'Execução de Vendas',
      'Revenue Intelligence',
      'Benchmarks'
    ]),
    series: z.string().optional(),
    seriesNum: z.number().optional(),
    pubDate: z.date(),
    readTime: z.number(),
    num: z.number(),
    excerpt: z.string(),
    featured: z.boolean().default(false),
  }),
});

export const collections = { blog };
