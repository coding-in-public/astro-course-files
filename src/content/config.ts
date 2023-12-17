import { defineCollection, reference, z } from "astro:content";
import postSchema from "../schemas/postSchema";
import roleSchema from "../schemas/roleSchema";
import teamSchema from "../schemas/teamSchema";

const team = defineCollection({
  type: "data",
  schema: teamSchema,
});

const role = defineCollection({
  type: "data",
  schema: roleSchema,
});

const posts = defineCollection({
  type: "content",
  schema: postSchema,
});

export const collections = {
  team,
  posts,
  role,
};
