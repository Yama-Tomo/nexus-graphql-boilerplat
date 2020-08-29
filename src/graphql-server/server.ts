import { createServer } from 'http';
import path from 'path';
import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import { createContext } from './context';
import { schema } from './schema';

require('dotenv').config({ path: path.resolve(__dirname, '../../.env') });

const { GRAPHQL_PORT = 5000 } = process.env;

const app = express();
const server = createServer(app);
const apollo = new ApolloServer({
  schema,
  context: createContext,
  introspection: process.env.NODE_ENV !== 'production',
  playground: process.env.NODE_ENV !== 'production',
});

apollo.applyMiddleware({ app });

server.listen({ port: GRAPHQL_PORT }, () => {
  process.stdout.write(
    `🚀 Server ready at http://localhost:${GRAPHQL_PORT}${apollo.graphqlPath}\n`
  );
});
