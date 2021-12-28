import { GraphQLSchema } from 'graphql';
import queryType from '../query';
import mutationType from '../mutation';

const schema = new GraphQLSchema({ query: queryType, mutation: mutationType });

export default schema;
