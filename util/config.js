import { config } from 'dotenv-safe';
import postgres from 'postgres';

export const postgresConfig = {
  ssl: Boolean(process.env.POSTGRES_URL),
  transform: {
    ...postgres.camel,
    undefined: null,
  },
};

export function setEnvironmentVariables() {
  if (process.env.NODE_ENV === 'production' || process.env.CI) {
    // Set standard environment variables for Postgres.js from
    // Vercel environment variables
    if (process.env.POSTGRES_URL) {
      // Setting correct Postgres.js environment variables
      process.env.PGHOST = process.env.POSTGRES_HOST;
      process.env.PGDATABASE = process.env.POSTGRES_DATABASE;
      process.env.PGUSER = process.env.POSTGRES_USER; // Update here
      process.env.PGPASSWORD = process.env.POSTGRES_PASSWORD;
    }
    return;
  }
  config();
}
