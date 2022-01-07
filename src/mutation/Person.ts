import type { RelationArgsT } from 'input-types/index';

import { GraphQLList, GraphQLNonNull, GraphQLObjectType, GraphQLString } from 'graphql';
import { GraphQLDate } from '@utils/scalars';
import { Person, Relation } from '@models/index';
import { PersonType } from '@output-types/index';
import { RelationArgs } from '@input-types/index';
import { GenreEnum } from '@enums/index';

const PersonMutation = new GraphQLObjectType({
  name: 'PersonMutation',
  fields: {
    create: {
      type: PersonType,
      args: {
        firstName: { type: new GraphQLNonNull(GraphQLString) },
        lastName: { type: new GraphQLNonNull(GraphQLString) },
        genre: { type: new GraphQLNonNull(GenreEnum) },
        birthDate: { type: new GraphQLNonNull(GraphQLDate) },
        deathDate: { type: GraphQLDate },
        birthCity: { type: GraphQLString },
        relations: { type: new GraphQLList(new GraphQLNonNull(RelationArgs)) },
      },
      async resolve(_, args, ctx) {
        const { relations, firstName, lastName, genre, birthDate, ...rest } = args;
        const newPerson = await Person.findOneAndUpdate({ firstName, lastName, genre, birthDate }, rest, { upsert: true, new: true }).exec();
        if (relations) {
          await Relation.insertMany(relations.map((relation: RelationArgsT) => ({ source: newPerson.id, ...relation })));
        }
        return newPerson;
      }
    },

    update: {
      type: PersonType,
      args: {
        firstName: { type: GraphQLString },
        lastName: { type: GraphQLString },
        genre: { type: GenreEnum },
        birthDate: { type: GraphQLDate },
        deathDate: { type: GraphQLDate },
        birthCity: { type: GraphQLString },
      },
      async resolve(parent, args, ctx) {
        if (Object.keys(parent).length === 0)
          throw new Error('Parent needed to perform update');
        return await Person.findOneAndUpdate(parent, args, { new: true }).exec();
      }
    },
  }
});

export default PersonMutation;
