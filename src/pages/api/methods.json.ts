export const prerender = false;

import type { APIRoute } from "astro";
import { getCollection, getEntry, type CollectionEntry } from "astro:content";

export const GET: APIRoute = async ({ params, request, redirect }) => {
  // const url = new URL(request.url);
  // const id = url.searchParams.get("id");

  // if (id) {
  //   const post = await getEntry("blog", id);
  //   if (!post) {
  //     return redirect("/404", 307);
  //   }
  //   return new Response(JSON.stringify(post));
  // }

  // const allPosts = await getCollection("blog");
  // return new Response(JSON.stringify(allPosts));

  try {
    const key = import.meta.env.API_KEY;
    const req = await fetch("https://jsonplaceholder.typicode.com/posts", {
      headers: {
        authorization: `Bearer ${key}`,
      },
    });
    if (!req.ok) {
      throw new Error("There was a problem fetching your posts");
    }
    const res = await req.json();
    return new Response(JSON.stringify(res));
  } catch (e) {
    console.log(e);
    return new Response(JSON.stringify(e));
  }
};

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();

    if (!data.title) {
      return new Response(
        JSON.stringify({
          message: "Missing required fields",
        }),
        { status: 400 }
      );
    }

    const req = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    if (!req.ok) {
      throw new Error("There was a problem fetching your posts");
    }
    const res = await req.json();
    return new Response(JSON.stringify(res));
  } catch (e) {
    console.log(e);
    return new Response(JSON.stringify(e));
  }
};

export const PUT: APIRoute = async ({ request }) => {
  try {
    const url = new URL(request.url);
    const id = url.searchParams.get("id");

    if (!id) {
      return new Response(
        JSON.stringify({
          message: "Missing required fields",
        }),
        { status: 400 }
      );
    }
    const data = await request.json();

    const req = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
      {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    );
    if (!req.ok) {
      throw new Error("There was a problem fetching your posts");
    }
    const res = await req.json();
    return new Response(JSON.stringify(res));
  } catch (e) {
    console.log(e);
    return new Response(JSON.stringify(e));
  }
};
export const DELETE: APIRoute = async ({ request }) => {
  try {
    const url = new URL(request.url);
    const id = url.searchParams.get("id");

    if (!id) {
      return new Response(
        JSON.stringify({
          message: "Missing required fields",
        }),
        { status: 400 }
      );
    }
    const data = await request.json();

    const req = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
      {
        method: "DELETE",
      }
    );
    if (!req.ok) {
      throw new Error("There was a problem fetching your posts");
    }
    const res = await req.json();
    return new Response(JSON.stringify(res));
  } catch (e) {
    console.log(e);
    return new Response(JSON.stringify(e));
  }
};
