import { GraphQLNonNull, GraphQLObjectType, GraphQLString } from 'graphql';
import { PersonType } from '@output-types/index';
import { Person } from '@models/index';

const queryType = new GraphQLObjectType({
  name: 'Query',
  fields: {
    person: {
      type: PersonType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
      },
      async resolve(_, args, ctx) {
        const name: string = args.name;
        return await Person.findOne({ firstName: name });
      },
    },
  },
});

export default queryType;
