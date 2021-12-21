import express from 'express';
import { GraphQLSchema } from 'graphql';
import { graphqlHTTP } from 'express-graphql';

import queryType from './query';

const app = express();

const schema = new GraphQLSchema({ query: queryType });

app.use('/graphql', graphqlHTTP({
  graphiql: true,
  schema,
}));

app.listen(4000, () => console.log('Listening on port 4000...'));
