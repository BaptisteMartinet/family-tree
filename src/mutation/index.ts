import { GraphQLObjectType, GraphQLString } from 'graphql';
import { Person, Relation } from '@models/index';
import PersonMutation from './Person';
import RelationMutation from './Relation';

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
    relation: {
      type: RelationMutation,
      args: {
        id: { type: GraphQLString },
      },
      async resolve(_, { id }, ctx) {
        if (id === undefined)
          return {};
        const relation = await Relation.findById(id);
        if (relation === null)
          throw new Error(`Relation#${id} does not exist`);
        return relation;
      }
    },
  }
});

export default mutationType;
