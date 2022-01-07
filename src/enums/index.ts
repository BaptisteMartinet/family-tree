import { GraphQLEnumType } from 'graphql';

export enum RelationTypeEnumT {
  PARENT = 'PARENT',
}

export const RelationTypeEnum = new GraphQLEnumType({
  name: 'RelationTypeEnum',
  values: {
    PARENT: { value: 'PARENT' },
  }
});

export enum GenreEnumT {
  MALE = 'MALE',
  FEMALE = 'FEMALE',
}

export const GenreEnum = new GraphQLEnumType({
  name: 'GenreEnum',
  values: {
    MALE: { value: 'MALE' },
    FEMALE: { value: 'FEMALE' },
  }
});
