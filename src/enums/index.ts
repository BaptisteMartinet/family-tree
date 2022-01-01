import { GraphQLEnumType } from 'graphql';

export enum RelationTypeEnumT {
  PARENT = 0,
  CHILD,
}

export const RelationTypeEnum = new GraphQLEnumType({
  name: 'RelationTypeEnum',
  values: {
    PARENT: { value: 0 },
    CHILD: { value: 1 },
  },
});
