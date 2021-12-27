import { GraphQLNonNull, GraphQLObjectType, GraphQLString } from 'graphql';
import { PersonType } from '@output-types/index';
import { Person } from '@models/index';
import { GraphQLDate } from '@utils/scalars';

const PersonMutation = new GraphQLObjectType({
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
    },
  }
});

export default PersonMutation;
