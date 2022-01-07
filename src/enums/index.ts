import { GraphQLEnumType } from 'graphql';

export enum RelationTypeEnumT {
  PARENT = 'PARENT',
}

export const RelationTypeEnum = new GraphQLEnumType({
  name: 'RelationTypeEnum',
  values: {
    PARENT: { value: 'PARENT' },
  },
});
