import { Hono } from "hono";
const app = new Hono<{ Bindings: Env }>();

app.get("/api/", (c) => c.json({ name: "Cloudflare" }));

app.all("/api/*", (c) => {
  return c.json(
    {
      error: "not_found",
      message: `Cannot ${c.req.method} ${c.req.path}`,
    },
    404
  );
});

export default app;
