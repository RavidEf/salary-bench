import type { Sql } from 'postgres';
import { z } from 'zod';

export const mainSurveySchema = z.object({
  jobFunction: z.number(),
  seniority: z.number(),
  industry: z.number(),
  gender: z.number(),
  salary: z
    .number()
    .gt(18000, {
      message:
        'Your salary should be above the minimum wage to submit it. sorry. ',
    })
    .int(),
  yrs: z.number(),
});

export type JobInformationType = {
  id: number;
  jobFunctionId: number;
  seniorityId: number;
  industryId: number;
  genderId: number;
  userId?: number;
  salary: number;
  yearsOfExperience: number;
  sessionTokenCookie: string;
};

export type JobInfoWithSession = {
  id: number;
  jobFunctionId: number;
  seniorityId: number;
  industryId: number;
  genderId: number;
  userId: number;
  salary: number;
  yearsOfExperience: number;
  sessionTokenCookie: string;
};

export type JobInformationAndTitles = {
  id: number;
  jobFunctionId: number;
  seniorityId: number;
  industryId: number;
  genderId: number;
  userId: number;
  salary: number;
  yearsOfExperience: number;
  seniorityLevel: string;
  genderTitle: string;
  jobFunction: string;
  industryCategory: string;
};

export type JobFunctionsGet = {
  userName: string;
  jobFunction: string;
  seniorityLevel: string;
  industryCategory: string;
  id: number;
  jobFunctionId: number;
  seniorityId: number;
  genderId: number;
  industryId: number;
  userId: number;
  salary: number;
  yearsOfExperience: number;
};

export async function up(sql: Sql) {
  await sql`
    CREATE TABLE job_information (
      id integer PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
      job_function_id integer NOT NULL REFERENCES titles (id),
      seniority_id integer NOT NULL REFERENCES seniority (id),
      gender_id integer NOT NULL REFERENCES genders (id),
      industry_id integer NOT NULL REFERENCES industry (id),
      user_id integer NOT NULL REFERENCES users (id) ON DELETE cascade,
      salary integer NOT NULL,
      years_of_experience integer NOT NULL
    )
  `;
}

export async function down(sql: Sql) {
  await sql` DROP TABLE job_information `;
}
