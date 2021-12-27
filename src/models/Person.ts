import mongoose, { Schema } from 'mongoose';

const PersonSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  birthDate: { type: Date, required: false },
  deathDate: { type: Date, required: false },
});

const Person = mongoose.model('Person', PersonSchema, 'persons');

export default Person;
