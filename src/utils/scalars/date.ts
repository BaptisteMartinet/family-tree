import { GraphQLScalarType, Kind } from 'graphql';

const GraphQLDate = new GraphQLScalarType({
  name: 'Date',
  description: 'Date custom scalar type',
  parseValue(value) {
    if (typeof(value) !== 'string')
      throw new Error('GraphQLDate should be a string');
    return new Date(value);
  },
  serialize(value) {
    return value;
  },
  parseLiteral(ast) {
    switch (ast.kind) {
      case Kind.STRING:
        return new Date(ast.value);
      default:
        break;
    }
    return null;
  }
});

export default GraphQLDate;
