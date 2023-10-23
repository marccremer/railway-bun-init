import {
  pgTable,
  serial,
  text,
  date,
  integer,
  boolean,
} from "drizzle-orm/pg-core";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { env } from "../env";

// for migrations
const postgresClient = postgres(env.DATABASE_URL, {
  max: 1,
  username: env.PGUSER,
  password: env.PGPASSWORD,
  port: env.PGPORT,
});
export const db = drizzle(postgresClient);
// for query purposes

export const todos = pgTable("todos", {
  id: serial("id").primaryKey().notNull(),
  title: text("title").notNull(),
  dueDate: date("due_date"),
  priority: integer("priority"),
  completed: boolean("completed").default(false),
});
