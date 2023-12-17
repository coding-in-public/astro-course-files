import { reference, z } from "astro:content";

const postSchema = z.object({
  title: z.string().max(65, {
    message: "Your title must be 65 characters or less.",
  }),
  tags: z.array(z.string()),
  pubDate: z.date(),
  isDraft: z.boolean(),
  canonicalURL: z.string().url().optional(),
  author: reference("team"),
});

export default postSchema;
