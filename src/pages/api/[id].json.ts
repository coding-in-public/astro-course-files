import type { APIRoute } from "astro";
import { getCollection, getEntry, type CollectionEntry } from "astro:content";

export const GET: APIRoute = async ({ params, request }) => {
  const id = params.id as CollectionEntry<"blog">["id"];
  const post = await getEntry("blog", id);
  return new Response(JSON.stringify(post));
};

export async function getStaticPaths() {
  const posts = await getCollection("blog");
  return posts.map((post) => ({
    params: { id: post.slug },
  }));
}
