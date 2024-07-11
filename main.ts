Deno.serve((request) => {
  const headers = request.headers;
  const userId = headers.get("X-Forwarded-User");

  if (userId !== null && userId !== "" && userId !== "-") {
    return new Response(userId, {
      status: 200,
      headers: {
        "Content-Type": "text/plain",
      },
    });
  } else {
    return new Response("Unauthorized", {
      status: 401,
      headers: {
        "Content-Type": "text/plain",
      },
    });
  }
});
