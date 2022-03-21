import Note from '../models/Note.js';

function NotesController() {
  async function createNote(request, reply) {
    console.log('createNote');
  }
  async function getNotes(request, reply) {
    console.log('getNotes');
  }
  async function getNote(request, reply) {
    console.log('getNote');
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
