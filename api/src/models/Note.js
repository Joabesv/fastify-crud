import mongoose from 'mongoose';

const noteSchema = new mongoose.Schema({
  text: { type: String, required: true },
});

const Note = mongoose.model('note', noteSchema);

export default Note;
