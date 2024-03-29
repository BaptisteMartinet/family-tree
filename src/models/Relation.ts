import mongoose, { Schema } from 'mongoose';
import { RelationTypeEnumT } from '@enums/index';

const RelationSchema = new Schema({
  sourceId: { type: Schema.Types.ObjectId, ref: 'Person', required: true },
  targetId: { type: Schema.Types.ObjectId, ref: 'Person', required: true },
  type: { type: String, enum: Object.values(RelationTypeEnumT) , required: true },
}, { timestamps: true });

const Relation = mongoose.model('Relation', RelationSchema, 'relations');

export default Relation;
