import { defineCollection, reference, z } from "astro:content";

const features = defineCollection({
  type: "data",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    icon: z.string().refine((val) => val.startsWith("icon")),
  }),
});

const tools = defineCollection({
  type: "data",
  schema: z.object({
    title: z.string(),
    icon: z.string().refine((val) => val.startsWith("icon")),
  }),
});

const projects = defineCollection({
  type: "data",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      thumbnail: image(),
      icons: z.array(reference("tools")),
      url: z.string().url(),
    }),
});

const posts = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string().max(65, {
        message: "Title cannot be longer than 65 characters",
      }),
      description: z.string().max(165, {
        message: "Description cannot be longer than 165 characters",
      }),
      image: image().refine((img) => img.width >= 1000, {
        message: "Image must be 1000px wide or more",
      }),
      pubDate: z.date(),
      isDraft: z.boolean().optional(),
    }),
});

export const collections = {
  features,
  tools,
  projects,
  posts,
};
