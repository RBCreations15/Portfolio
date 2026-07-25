import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    client: z.string().optional(),
    year: z.string(),
    location: z.string().optional(),
    categories: z.array(z.string()).min(1),
    services: z.array(z.string()).default([]),
    status: z.enum(['placeholder', 'coming-soon', 'published']).default('placeholder'),
    featured: z.boolean().default(false),
    order: z.number().int(),
    summary: z.string(),
    heroImage: z.string().optional(),
    heroAlt: z.string().optional(),
    overview: z.string().optional(),
    challenge: z.string().optional(),
    approach: z.string().optional(),
    role: z.string().optional(),
    deliverables: z.array(z.string()).default([]),
    process: z.array(z.object({
      title: z.string(),
      description: z.string(),
    })).default([]),
    gallery: z.array(z.object({
      image: z.string().optional(),
      alt: z.string(),
      caption: z.string().optional(),
      orientation: z.enum(['landscape', 'portrait', 'square', 'wide']).default('landscape'),
    })).default([]),
    videos: z.array(z.object({
      url: z.url().optional(),
      title: z.string(),
      caption: z.string().optional(),
    })).default([]),
    beforeAfter: z.object({
      beforeImage: z.string().optional(),
      afterImage: z.string().optional(),
      beforeAlt: z.string(),
      afterAlt: z.string(),
      note: z.string().optional(),
    }).optional(),
    results: z.array(z.string()).default([]),
    credits: z.array(z.object({
      role: z.string(),
      name: z.string(),
    })).default([]),
  }),
});

const archive = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/archive' }),
  schema: z.object({
    title: z.string(),
    category: z.enum(['Photography', 'Places', 'Materials', 'Process', 'Concepts', 'Notes']),
    year: z.string(),
    order: z.number().int(),
    summary: z.string(),
    intro: z.string(),
    note: z.string().optional(),
    gallery: z.array(z.object({
      label: z.string(),
      alt: z.string(),
      orientation: z.enum(['landscape', 'portrait', 'square', 'wide']).default('landscape'),
      tone: z.enum(['light', 'dark', 'clay', 'olive', 'rose', 'tobacco']).default('light'),
    })).default([]),
  }),
});

export const collections = { projects, archive };
