import * as path from 'path';
import { makeSchema } from '@nexus/schema';
import { nexusSchemaPrisma } from 'nexus-plugin-prisma/schema';
import * as resolvers from './resolvers';
import * as objectTypes from './object_types';

const schema = makeSchema({
  types: { ...resolvers, ...objectTypes },
  plugins: [nexusSchemaPrisma()],
  outputs: {
    schema: path.join(__dirname, '../../schema.graphql'),
    typegen: path.join(__dirname, './nexus-generaged.ts'),
  },
  typegenAutoConfig: {
    contextType: 'Context.Context',
    sources: [
      {
        source: require.resolve('./context'),
        alias: 'Context',
      },
    ],
  },
});

export { schema };
