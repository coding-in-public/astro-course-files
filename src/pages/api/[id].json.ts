import type { APIRoute } from "astro";

export const DELETE: APIRoute = async ({ params }) => {
  const id = params.id;

  try {
    if (!id) {
      throw new Error("There was no ID provided");
    }

    const req = await fetch(`http://localhost:3000/links/${id}`, {
      method: "DELETE",
    });

    if (!req.ok) {
      throw new Error("There was a problem with the delete req server-side");
    }

    return new Response(null, { status: 204 });
  } catch (e) {
    console.error(e);
    if (e instanceof Error) {
      return new Response(
        JSON.stringify({
          message: e.message,
          success: false,
        }),
        {
          status: 404,
        }
      );
    }
  }
  return new Response(
    JSON.stringify({
      message: "There was an unknown error",
      success: false,
    }),
    {
      status: 404,
    }
  );
};

export const PATCH: APIRoute = async ({ params, request }) => {
  const id = params.id;
  const { isRead } = await request.json();

  try {
    if (!id) {
      throw new Error("There was no ID provided");
    }

    const req = await fetch(`http://localhost:3000/links/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ isRead }),
    });

    if (!req.ok) {
      throw new Error("There was a problem with the patch req server-side");
    }

    return new Response(null, { status: 204 });
  } catch (e) {
    console.error(e);
    if (e instanceof Error) {
      return new Response(
        JSON.stringify({
          message: e.message,
          success: false,
        }),
        {
          status: 404,
        }
      );
    }
  }
  return new Response(
    JSON.stringify({
      message: "There was an unknown error",
      success: false,
    }),
    {
      status: 404,
    }
  );
};
