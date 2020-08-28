import { createServer } from 'http';
import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import { createContext } from './context';
import { schema } from './nexus-schema-gen';

const { PORT = 5000 } = process.env;

const app = express();
const server = createServer(app);
const apollo = new ApolloServer({
  schema,
  context: createContext,
  introspection: process.env.NODE_ENV !== 'production',
  playground: process.env.NODE_ENV !== 'production',
});

apollo.applyMiddleware({ app });

server.listen({ port: PORT }, () => {
  process.stdout.write(`🚀 Server ready at http://localhost:${PORT}${apollo.graphqlPath}\n`);
});
