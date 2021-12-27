import { GraphQLNonNull, GraphQLObjectType, GraphQLString } from 'graphql';
import { PersonType } from '@output-types/index';
import { Person } from '@models/index';
import { GraphQLDate } from '@utils/scalars';

const mutationType = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    person: {
      type: new GraphQLObjectType({
        name: 'PersonMutation',
        fields: {
          create: {
            type: PersonType,
            args: {
              firstName: { type: new GraphQLNonNull(GraphQLString) },
              lastName: { type: new GraphQLNonNull(GraphQLString) },
              birthDate: { type: GraphQLDate },
              deathDate: { type: GraphQLDate },
            },
            async resolve(_, args, ctx) {
              return await Person.create(args);
            },
          }
        },
      }),
      args: {
        id: { type: GraphQLString },
      },
      async resolve(_, { id }, ctx) {
        if (id === undefined)
          return {};
        const person = await Person.findById(id);
        return person ?? {};
      }
    }
  },
});

export default mutationType;
