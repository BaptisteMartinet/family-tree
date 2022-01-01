import type { RelationArgsT } from 'input-types/index';

import { GraphQLList, GraphQLNonNull, GraphQLObjectType, GraphQLString } from 'graphql';
import { PersonType } from '@output-types/index';
import { Person, Relation } from '@models/index';
import { GraphQLDate } from '@utils/scalars';
import { RelationArgs } from '@input-types/index';

const PersonMutation = new GraphQLObjectType({
  name: 'PersonMutation',
  fields: {
    create: {
      type: PersonType,
      args: {
        firstName: { type: new GraphQLNonNull(GraphQLString) },
        lastName: { type: new GraphQLNonNull(GraphQLString) },
        birthDate: { type: GraphQLDate },
        deathDate: { type: GraphQLDate },
        relations: { type: new GraphQLList(new GraphQLNonNull(RelationArgs)) },
      },
      async resolve(_, args, ctx) {
        const { relations, ...rest } = args;
        const newPerson = await Person.create(rest);
        if (relations) {
          await Relation.insertMany(relations.map((relation: RelationArgsT) => ({ source: newPerson.id, target: relation.target, type: relation.type })));
        }
        return newPerson;
      }
    },

    update: {
      type: PersonType,
      args: {
        firstName: { type: GraphQLString },
        lastName: { type: GraphQLString },
        birthDate: { type: GraphQLDate },
        deathDate: { type: GraphQLDate },
      },
      async resolve(source, args, ctx) {
        if (Object.keys(source).length === 0)
          throw new Error('Source needed to perform update');
        source._doc = Object.assign(source._doc, args);
        return await source.save();
      }
    },
  }
});

export default PersonMutation;
