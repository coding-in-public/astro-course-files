import type { APIRoute } from "astro";

export const GET: APIRoute = async () => {
  try {
    const req = await fetch("http://localhost:3000/links");

    if (!req.ok) {
      throw new Error("Get req was not okay");
    }

    const res = await req.json();

    return new Response(JSON.stringify(res), {
      status: 200,
    });
  } catch (e) {
    console.log(e);
    return new Response(
      JSON.stringify({
        message: e instanceof Error ? e.message : "There was an unknown error",
      })
    );
  }
};
