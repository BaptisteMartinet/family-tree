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
    parents: {
      type: new GraphQLList(PersonType),
      async resolve(source, args, ctx) {
        const parentRelations = await Relation.find({
          source: source.id,
          type: RelationTypeEnumT.PARENT,
        });
        const parentIds = parentRelations.map(parentRelation => (parentRelation.target));
        return await Person.find({ _id: { $in: parentIds } });
      },
    },
    createdAt: { type: GraphQLDate },
    updatedAt: { type: GraphQLDate },
  }),
});
