import { GraphQLObjectType, GraphQLString } from 'graphql';
import { GraphQLDate } from 'utils/scalars/index';

export interface PersonTypeT {
  id: string,
  firstName: string,
  lastName: string,
  birthDate: Date,
  deathDate: Date,
}

export const PersonType = new GraphQLObjectType({
  name: 'Person',
  fields: {
    id: { type: GraphQLString },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    birthDate: { type: GraphQLDate },
    deathDate: { type: GraphQLDate },
  },
});
