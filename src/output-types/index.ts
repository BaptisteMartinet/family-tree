import { GraphQLObjectType, GraphQLString } from 'graphql';

export interface PersonTypeT {
  firstName: String,
  lastName: String,
}

export const PersonType = new GraphQLObjectType({
  name: 'Person',
  fields: {
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
  },
});
