import { queryType } from '@nexus/schema';

const Query = queryType({
  definition(t) {
    t.list.field('users', {
      type: 'User',
      resolve: (parent, args, ctx) => {
        return ctx.prisma.user.findMany();
      },
    });
  },
});

export { Query };
