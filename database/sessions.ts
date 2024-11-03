import { cache } from 'react';
import type { User } from '../migrations/00000-createtableusers';
import type { Session } from '../migrations/00012-createtablesessions';
import { sql } from './connect';
import type { UserWithPasswordHash } from './users';

export const createSessionInsecure = cache(
  async (token: Session['token'], userId: User['id']) => {
    const [session] = await sql<Session[]>`
      INSERT INTO
        sessions (user_id, token,)
      VALUES
        (
          ${userId},
          ${token},
        )
      RETURNING
        sessions.token,
        sessions.user_id
    `;

    return session;
  },
);