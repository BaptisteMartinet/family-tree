import { GraphQLNonNull, GraphQLObjectType, GraphQLString } from 'graphql';
import { PersonType } from '../output-types';
import { Person } from '../models';

const queryType = new GraphQLObjectType({
  name: 'Query',
  fields: {
    person: {
      type: PersonType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve: async (_, args, ctx) => {
        const name: string = args.name;
        return await Person.findOne({ firstName: name });
      },
    },
  },
});

export default queryType;
