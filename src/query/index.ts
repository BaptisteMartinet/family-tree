import { GraphQLList, GraphQLNonNull, GraphQLObjectType, GraphQLString } from 'graphql';
import { Person } from '@models/index';
import { PersonType } from '@output-types/index';

const queryType = new GraphQLObjectType({
  name: 'Query',
  fields: {
    person: {
      type: PersonType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLString) },
      },
      async resolve(_, args, ctx) {
        return await Person.findById(args.id).exec();
      },
    },
    persons: {
      type: new GraphQLList(new GraphQLNonNull(PersonType)),
      async resolve(_, args, ctx) {
        return await Person.find({}).exec();
      },
    },
  },
});

export default queryType;
