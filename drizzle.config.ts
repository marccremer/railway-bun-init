// drizzle.config.ts
import type { Config } from "drizzle-kit";
import { env } from "./env"
export default {
    schema: "./src/schema.ts",
    out: "./drizzle",
    dbCredentials: {
        connectionString: env.DATABASE_URL
    },
    driver: 'pg'
} satisfies Config;



