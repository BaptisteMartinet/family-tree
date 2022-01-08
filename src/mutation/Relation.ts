import { GraphQLNonNull, GraphQLObjectType, GraphQLString } from 'graphql';
import { Relation } from '@models/index';
import { RelationType } from '@output-types/index';
import { RelationTypeEnum } from '@enums/index';

const RelationMutation = new GraphQLObjectType({
  name: 'RelationMutation',
  fields: {
    create: {
      type: RelationType,
      args: {
        sourceId: { type: new GraphQLNonNull(GraphQLString) },
        targetId: { type: new GraphQLNonNull(GraphQLString) },
        type: { type: GraphQLNonNull(RelationTypeEnum) },
      },
      async resolve(parent, args, ctx, info) {
        return await Relation.findOneAndUpdate(args, {}, { upsert: true, new: true }).exec();
      }
    }
  }
});

export default RelationMutation;
