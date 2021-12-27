import { GraphQLObjectType, GraphQLString } from 'graphql';

export interface PersonTypeT {
  firstName: string,
  lastName: string,
}

export const PersonType = new GraphQLObjectType({
  name: 'Person',
  fields: {
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
  },
});
