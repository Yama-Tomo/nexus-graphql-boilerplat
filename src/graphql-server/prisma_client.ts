import { PrismaClient } from '@prisma/client';
import chalk from 'chalk';

const isDev = process.env.NODE_ENV !== 'production';

const prisma = (() => {
  if (!isDev) {
    return new PrismaClient();
  }

  const client = new PrismaClient({
    log: [{ emit: 'event', level: 'query' }],
  });

  client.$on('query', (e) => {
    const params: unknown[] = JSON.parse(e.params);

    const query = params.length
      ? params.reduce<string>(
          (replaceQuery, param) => replaceQuery.replace('?', String(param)),
          e.query
        )
      : e.query;

    console.log(`${chalk.white.bgGreen.bold(`SQL(${e.duration}ms)`)} ${query}`);
  });

  return client;
})();

export { prisma };
