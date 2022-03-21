import Note from '../models/Note.js';

function NotesController() {
  async function createNote(request, reply) {
    try {
      // catching the data
      const note = request.body;
      // sending to the mongoose database
      const newNote = await Note.create(note);
      // no errors? send the status and continue
      reply.code(201).send(newNote);
    } catch (err) {
      reply.code(500).send(err);
    }
  }
  async function getNotes(request, reply) {
    try {
      // empty obj signalizing no params to the search
      const notes = await Note.find({});
      reply.code(200).send(notes);
    } catch (err) {
      reply.code(500).send(err);
    }
  }
  async function getNote(request, reply) {
    console.log('get note');
  }
  async function updateNote(request, reply) {
    console.log('updateNote');
  }
  async function deleteNote(request, reply) {
    console.log('deleteNote');
  }

  return {
    createNote,
    getNotes,
    getNote,
    updateNote,
    deleteNote,
  };
}

export { NotesController };
