import { defineCollection, z } from "astro:content";

const team = defineCollection({
  type: "data",
  schema: z.object({
    name: z.string(),
    role: z.enum(["Marketing", "Dev", "Design"]),
    location: z.string().optional(),
  }),
});

const posts = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string().max(65, {
      message: "Your title must be 65 characters or less.",
    }),
    tags: z.array(z.string()),
    pubDate: z.date(),
    isDraft: z.boolean(),
    canonicalURL: z.string().url().optional(),
  }),
});

export const collections = {
  team,
  posts,
};
