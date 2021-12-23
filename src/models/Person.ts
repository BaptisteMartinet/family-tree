import mongoose, { Schema } from 'mongoose';

const PersonSchema = new Schema({
  firstName: String,
  lastName: String,
});

const Person = mongoose.model('Person', PersonSchema);

export default Person;
