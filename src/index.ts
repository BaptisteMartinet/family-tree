const express = require('express');
const { buildSchema } = require('graphql');
const { graphqlHTTP } = require('express-graphql');

const app = express();

const schema = buildSchema(`
  type Query {
    hello: String
    welcomeMessage(name: String): String
  }
`);

const root = {
  hello: () => { return 'hello world!'},
  welcomeMessage: (args: any) => { return `Welcome ${args.name}!`},
};

app.use('/graphql', graphqlHTTP({
  graphiql: true,
  schema: schema,
  rootValue: root,
}));

app.listen(4000, () => console.log('Listening on port 4000...'));
