import { defineCollection, z } from "astro:content";

export const techs = defineCollection({
  type: "data",
  schema: z.object({
    name: z.string(),
    icon: z.string(),
    color: z.string(),
  }),
});

export const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    cover: z.string(),
    //link: z.string().url().optional(),
    tags: z.array(z.string()),
    date: z.date().optional(),
  }),
});
