import { defineCollection, z } from "astro:content";

const team = defineCollection({
  type: "data",
  schema: z.object({
    name: z.string(),
    role: z.enum(["Marketing", "Dev", "Design"]),
    location: z.string().optional(),
  }),
});

export const collections = {
  team,
};
