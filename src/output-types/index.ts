import { GraphQLObjectType, GraphQLString } from 'graphql';

export interface PersonT {
  firstName: string,
  lastName: string,
}

export const Person = new GraphQLObjectType({
  name: 'Person',
  fields: {
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
  },
});
