import { GraphQLObjectType, GraphQLString } from 'graphql';
import { Person } from '@models/index';
import PersonMutation from './Person';

const mutationType = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    person: {
      type: PersonMutation,
      args: {
        id: { type: GraphQLString },
      },
      async resolve(_, { id }, ctx) {
        if (id === undefined)
          return {};
        const person = await Person.findById(id);
        if (person === null)
          throw new Error(`Person#${id} does not exist`);
        return person;
      }
    },
  }
});

export default mutationType;
