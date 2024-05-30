import db from '../database/connection';

export const countUsers = async (): Promise<number> => {
  const result = await db('users').count<{ count: string | number }[]>(
    '* as count'
  );

  return Number(result[0].count);
};
