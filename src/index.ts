import { DATABASE_URL, PORT } from '@utils/env/index';
import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import mongoose from 'mongoose';
import schema from './schema';

(async () => {
  if (DATABASE_URL === undefined || PORT === undefined)
    throw new Error('DATABASE_URL & PORT env variables needed.');
  mongoose.set('debug', true);
  await mongoose.connect(DATABASE_URL);
  console.info('Successfully connected to MongoDB.');
  const app = express();
  app.get('/', (req, res) => { res.redirect('/graphql'); });
  app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema,
  }));
  app.listen(PORT, () => console.info(`GraphQL API listening on port ${PORT}...`));
})();
