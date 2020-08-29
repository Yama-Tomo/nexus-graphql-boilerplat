import { PrismaClient } from '@prisma/client';
import { PubSub } from 'graphql-subscriptions';
import { prisma } from './prisma_client';

export interface Context {
  prisma: PrismaClient;
  pubsub: PubSub;
}

const pubsub = new PubSub();
const createContext = (): Context => {
  return {
    prisma,
    pubsub,
  };
};

export { createContext };
