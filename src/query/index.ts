import { GraphQLNonNull, GraphQLObjectType, GraphQLString } from 'graphql';
import { Person } from '../output-types';

import database from '../fakeDatabase';

const queryType = new GraphQLObjectType({
  name: 'Query',
  fields: {
    person: {
      type: Person,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve: (_, args, ctx) => {
        const name: string = args.name;
        return database.find(person => person.firstName.toLowerCase() === name.toLowerCase());
      },
    },
  },
});

export default queryType