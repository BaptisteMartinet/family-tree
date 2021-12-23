import express from 'express';
import { GraphQLSchema } from 'graphql';
import { graphqlHTTP } from 'express-graphql';
import mongoose from 'mongoose';

import queryType from './query';

const PORT = 3000;

(async () => {
  await mongoose.connect('mongodb://localhost:27017/family-tree');
  console.info('Successfully connected to MongoDB.');
  const schema = new GraphQLSchema({ query: queryType });
  console.info('Successfully built the GraphQL schema.');
  const app = express();
  app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema,
  }));
  app.listen(4000, () => console.info(`GraphQL API listening on port ${PORT}...`));
})();
