import { z } from "astro:content";

const roleSchema = z.object({
  name: z.string().max(12, {
    message: "Your role name must be 12 characters or less.",
  }),
  description: z.string().max(165, {
    message: "Your role description must be 165 characters or less.",
  }),
});

export default roleSchema;
