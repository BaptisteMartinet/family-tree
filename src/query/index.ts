import { GraphQLNonNull, GraphQLObjectType, GraphQLString } from 'graphql';
import { Person } from '@models/index';
import { PersonType } from '@output-types/index';

const queryType = new GraphQLObjectType({
  name: 'Query',
  fields: {
    person: {
      type: PersonType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLString) },
      },
      async resolve(_, args, ctx) {
        return await Person.findById(args.id);
      },
    },
  },
});

export default queryType;
