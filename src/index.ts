import { DATABASE_URL, PORT } from '@utils/env/index';
import express from 'express';
import { GraphQLSchema } from 'graphql';
import { graphqlHTTP } from 'express-graphql';
import mongoose from 'mongoose';

import queryType from './query';
import mutationType from './mutation';

(async () => {
  await mongoose.connect(DATABASE_URL ?? "");
  console.info('Successfully connected to MongoDB.');
  const schema = new GraphQLSchema({ query: queryType, mutation: mutationType });
  console.info('Successfully built the GraphQL schema.');
  const app = express();
  app.get('/', (req, res) => { res.redirect('/graphql'); });
  app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema,
  }));
  app.listen(PORT, () => console.info(`GraphQL API listening on port ${PORT}...`));
})();
