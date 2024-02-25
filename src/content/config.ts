import { defineCollection, z } from "astro:content";

const imagePosts = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.date(),
      image: z.object({
        src: image().refine((img) => img.width > 200, {
          message: "Your image must be at least 200px wide",
        }),
        alt: z.string(),
      }),
    }),
});

export const collections = { imagePosts };
