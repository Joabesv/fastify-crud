import Note from '../models/Note.js';

function NotesController() {
  async function createNote(request, reply) {
    try {
      // catching the data
      const note = request.body;
      // sending to the mongoose database
      const newNote = await Note.create(note);
      // no errors? send the status and continue
      return reply.code(201).send(newNote);
    } catch (err) {
      return reply.code(500).send(err);
    }
  }
  async function getNotes(request, reply) {
    try {
      // empty obj signalizing no params to the search
      const notes = await Note.find({});
      return reply.code(200).send(notes);
    } catch (err) {
      return reply.code(500).send(err);
    }
  }
  async function getNote(request, reply) {
    try {
      const noteId = request.params.id;
      const note = await Note.findById(noteId);
      return reply.code(200).send(note);
    } catch (err) {
      return reply.code(404).send(err);
    }
  }
  async function updateNote(request, reply) {
    // we need to take both id and the body
    try {
      const noteId = request.params.id;
      const updates = request.body;
      await Note.findByIdAndUpdate(noteId, updates);
      const noteToUpdate = await Note.findById(noteId);
      return reply.code(200).send({ data: noteToUpdate });
    } catch (err) {
      return reply.code(500).send(err);
    }
  }
  async function deleteNote(request, reply) {
    try {
      const noteId = request.params.id;
      const noteToDelete = await Note.findById(noteId);
      await Note.findByIdAndDelete(noteId);
      return reply.code(200).send({ data: noteToDelete });
    } catch (err) {
      return reply.code(500).send(err);
    }
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
