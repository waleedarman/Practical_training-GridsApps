import dotenv from "dotenv";
import { z } from "zod";

dotenv.config();

const envSchema = z.object({
  PORT: z.string(),
  DB_URL: z.string().url()
});

const parsed = envSchema.parse(process.env);

export const env = parsed;
