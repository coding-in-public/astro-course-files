import { defineCollection, z } from "astro:content";

const products = defineCollection({
  type: "data",
  schema: z.object({
    product_id: z.number(),
    product_name: z.string(),
    price: z.number(),
    in_stock: z.boolean(),
    colors: z.array(z.string()),
    details: z.object({
      brand: z.string(),
      model: z.string(),
      screen_size: z.number().optional(),
      wireless: z.boolean().optional(),
      features: z.array(z.string()),
    }),
  }),
});

export const collections = { products };
