import * as path from 'path';
import { use } from 'nexus';
import { makeSchema } from '@nexus/schema';
import { prisma } from 'nexus-plugin-prisma';
import { nexusSchemaPrisma } from 'nexus-plugin-prisma/schema';
import * as resolvers from './resolvers';
import * as objectTypes from './object_types';

use(prisma({ features: { crud: true } }));

const schema = makeSchema({
  types: { ...resolvers, ...objectTypes },
  plugins: [nexusSchemaPrisma({ experimentalCRUD: true })],
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
