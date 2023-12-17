import { reference, z } from "astro:content";

const teamSchema = z.object({
  name: z.string(),
  role: reference("role"),
  location: z.string().optional(),
});

export default teamSchema;
