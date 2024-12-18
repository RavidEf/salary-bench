import type { Sql } from 'postgres';

export async function up(sql: Sql) {
  await sql`
    CREATE TABLE titles (
      id serial PRIMARY KEY,
      job_function varchar NOT NULL
    )
  `;
}

export async function down(sql: Sql) {
  await sql` DROP TABLE titles `;
}
