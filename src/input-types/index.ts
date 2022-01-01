import { GraphQLInputObjectType, GraphQLNonNull, GraphQLString } from 'graphql';
import { RelationTypeEnum, RelationTypeEnumT } from '@enums/index';

export interface RelationArgsT {
  target: string,
  type: RelationTypeEnumT,
}

export const RelationArgs = new GraphQLInputObjectType({
  name: 'RelationArgs',
  fields: {
    target: { type: new GraphQLNonNull(GraphQLString) },
    type: { type: new GraphQLNonNull(RelationTypeEnum) },
  },
});
