import { mutationType, arg } from '@nexus/schema';

const Mutation = mutationType({
  definition(t) {
    t.crud.createOneUser();
    t.crud.createOnePost();
    t.crud.deleteOneUser();
    t.crud.updateOnePost();
    t.crud.updateOneUser();
    t.crud.deleteOnePost();

    t.field('enablePost', {
      type: 'Post',
      args: {
        id: arg({ type: 'Int', required: true }),
      },
      resolve: (parent, args, ctx) =>
        ctx.prisma.post.update({ where: { id: args.id }, data: { published: true } }),
    });

    t.field('disablePost', {
      type: 'Post',
      args: {
        id: arg({ type: 'Int', required: true }),
      },
      resolve: (parent, args, ctx) =>
        ctx.prisma.post.update({ where: { id: args.id }, data: { published: false } }),
    });
  },
});

export { Mutation };
