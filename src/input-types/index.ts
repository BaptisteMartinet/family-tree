import { GraphQLInputObjectType, GraphQLNonNull, GraphQLString } from 'graphql';
import { RelationTypeEnum, RelationTypeEnumT } from '@enums/index';

export interface RelationArgsT {
  targetId: string,
  type: RelationTypeEnumT,
}

export const RelationArgs = new GraphQLInputObjectType({
  name: 'RelationArgs',
  fields: {
    targetId: { type: new GraphQLNonNull(GraphQLString) },
    type: { type: new GraphQLNonNull(RelationTypeEnum) },
  },
});
