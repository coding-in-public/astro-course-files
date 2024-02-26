import { defineCollection, z } from "astro:content";

const posts = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      cover: image().refine((img) => img.width >= 700, {
        message: "Your image must be at least 700px",
      }),
    }),
});

export const collections = { posts };
