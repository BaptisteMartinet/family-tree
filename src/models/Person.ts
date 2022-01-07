import mongoose, { Schema } from 'mongoose';
import { GenreEnumT } from 'enums/index';

const PersonSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  genre: { type: String, enum: Object.values(GenreEnumT), required: true },
  birthDate: { type: Date, required: false },
  deathDate: { type: Date, required: false },
}, { timestamps: true });

const Person = mongoose.model('Person', PersonSchema, 'persons');

export default Person;
