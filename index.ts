import Bao from "baojs";
import { db, todos } from "./drizzle/schema";
const port = 8080;
const app = new Bao();

app.get("/", async (ctx) => {
  const data = await db.select().from(todos);
  return ctx.sendPrettyJson(data);
});

const server = app.listen({ port });
console.log(`http://${server.hostname}:${server.port}/`); // http://0.0.0.0:3000/
