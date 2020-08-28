import { PrismaClient } from '@prisma/client';
import { PubSub } from 'graphql-subscriptions';

export interface Context {
  prisma: PrismaClient;
  pubsub: PubSub;
}

const prisma = new PrismaClient();
const pubsub = new PubSub();

const createContext = (): Context => {
  return {
    prisma,
    pubsub,
  };
};

export { createContext };
