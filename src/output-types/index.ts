import { GraphQLObjectType, GraphQLString } from 'graphql';

export interface PersonTypeT {
  firstName: string,
  lastName: string,
}

export const PersonType = new GraphQLObjectType({
  name: 'Person',
  fields: {
    id: { type: GraphQLString },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
  },
});
