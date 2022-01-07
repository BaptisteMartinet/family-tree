import { GraphQLList, GraphQLObjectType, GraphQLString } from 'graphql';
import { GraphQLDate } from 'utils/scalars/index';
import { Person, Relation } from '@models/index';
import { GenreEnum, RelationTypeEnumT } from '@enums/index';

export const PersonType: GraphQLObjectType = new GraphQLObjectType({
  name: 'Person',
  fields: () => ({
    id: { type: GraphQLString },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    genre: { type: GenreEnum },
    birthDate: { type: GraphQLDate },
    deathDate: { type: GraphQLDate },
    birthCity: { type: GraphQLString },
    createdAt: { type: GraphQLDate },
    updatedAt: { type: GraphQLDate },

    // Custom resolvers (i.e. computed data)

    parents: {
      type: new GraphQLList(PersonType),
      async resolve(parent, args, ctx, info) {
        const parentRelations = await Relation.find({
          source: parent.id,
          type: RelationTypeEnumT.PARENT,
        }).exec();
        const parentIds = parentRelations.map(parentRelation => (parentRelation.target));
        return await Person.find({ _id: { $in: parentIds } }).exec();
      },
    },

    childs: {
      type: new GraphQLList(PersonType),
      async resolve(parent, args, ctx, info) {
        const childRelations = await Relation.find({
          target: parent.id,
          type: RelationTypeEnumT.PARENT,
        }).exec();
        const childIds = childRelations.map(childRelation => (childRelation.source));
        return await Person.find({ _id: { $in: childIds } }).exec();
      },
    }
  }),
});
