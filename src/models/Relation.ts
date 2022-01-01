import mongoose, { Schema } from 'mongoose';

const RelationSchema = new Schema({
  source: { type: Schema.Types.ObjectId, ref: 'Person', required: true },
  target: { type: Schema.Types.ObjectId, ref: 'Person', required: true },
  type: { type: Number, required: true },
}, { timestamps: true });

const Relation = mongoose.model('Relation', RelationSchema, 'relations');

export default Relation;
