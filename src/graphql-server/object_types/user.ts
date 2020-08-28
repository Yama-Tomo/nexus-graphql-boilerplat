import { objectType } from '@nexus/schema';

const User = objectType({
  name: 'User',
  definition(t) {
    t.model.id();
    t.model.name();
    t.model.posts();
  },
});

export { User };
