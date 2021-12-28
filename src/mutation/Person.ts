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
      }
    },

    update: {
      type: PersonType,
      args: {
        firstName: { type: GraphQLString },
        lastName: { type: GraphQLString },
        birthDate: { type: GraphQLDate },
        deathDate: { type: GraphQLDate },
      },
      async resolve(source, args, ctx) {
        if (Object.keys(source).length === 0)
          throw new Error('Source needed to perform update');
        return await Person.findByIdAndUpdate(source.id, args, { new: true });
      }
    },
  }
});

export default PersonMutation;
