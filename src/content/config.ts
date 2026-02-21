import { defineCollection, z } from 'astro:content';

const blogSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  pubDate: z.date(),
  tags: z.array(z.string()).optional(),
  // Extended fields used by existing PT posts
  headline: z.string().optional(),
  deck: z.string().optional(),
  pillar: z.enum([
    'Pipeline Reality',
    'Execução de Vendas',
    'Revenue Intelligence',
    'Benchmarks'
  ]).optional(),
  series: z.string().optional(),
  seriesNum: z.number().optional(),
  readTime: z.number().optional(),
  num: z.number().optional(),
  excerpt: z.string().optional(),
  featured: z.boolean().default(false),
});

const blogPt = defineCollection({ type: 'content', schema: blogSchema });
const blogEn = defineCollection({ type: 'content', schema: blogSchema });

export const collections = {
  'blog-pt': blogPt,
  'blog-en': blogEn,
};
