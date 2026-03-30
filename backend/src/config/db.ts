import { neon } from "@neondatabase/serverless";
import { ENV } from "./env";

export const sql = neon(ENV.DATABASE_URL!);
