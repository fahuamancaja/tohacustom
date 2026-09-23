import { defineCollection } from 'astro:content';
import { file } from 'astro/loaders';
import { z } from 'astro/zod';

const highlights = defineCollection({
  loader: file('src/content/highlights.yaml'),
  schema: z.object({
    order: z.number(),
    title: z.string(),
    summary: z.string(),
    icon: z.string(),
  }),
});

const experience = defineCollection({
  loader: file('src/content/experience.yaml'),
  schema: z.object({
    order: z.number(),
    company: z.string(),
    url: z.url().optional(),
    location: z.string(),
    overview: z.string(),
    positions: z.array(
      z.object({
        title: z.string(),
        start: z.string(),
        end: z.string().optional(),
        bullets: z.array(z.string()),
      }),
    ),
  }),
});

const projects = defineCollection({
  loader: file('src/content/projects.yaml'),
  schema: z.object({
    order: z.number(),
    name: z.string(),
    featured: z.boolean().default(false),
    role: z.string().optional(),
    timeline: z.string(),
    logo: z.string().optional(),
    summary: z.string(),
    problem: z.string().optional(),
    approach: z.string().optional(),
    outcome: z.string().optional(),
    tags: z.array(z.string()).default([]),
    repo: z.url().optional(),
    url: z.url().optional(),
  }),
});

const skills = defineCollection({
  loader: file('src/content/skills.yaml'),
  schema: z.object({
    order: z.number(),
    name: z.string(),
    skills: z.array(
      z.object({
        name: z.string(),
        icon: z.string().optional(),
        glyph: z.string().optional(),
        summary: z.string(),
        tags: z.array(z.string()).default([]),
      }),
    ),
  }),
});

const certifications = defineCollection({
  loader: file('src/content/certifications.yaml'),
  schema: z.object({
    order: z.number(),
    title: z.string(),
    issuer: z.string(),
    date: z.string(),
    summary: z.string(),
    image: z.string().optional(),
    glyph: z.string().optional(),
    url: z.url().optional(),
  }),
});

export const collections = { highlights, experience, projects, skills, certifications };
