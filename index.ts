import { db, todos } from "./drizzle/schema";

const server = Bun.serve({
  hostname: "::",
  port: process.env.PORT ?? 3000,
  async fetch(request) {
    const data = await db.select().from(todos)
    return new Response(JSON.stringify(data));
  },
});

console.log(`Listening on http://localhost:${server.port}`);
