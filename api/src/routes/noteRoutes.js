import { NotesController } from '../controllers/notesController.js';

const notesController = NotesController();

export function noteRoutes(app) {
  // create the note
  app.post('/api/notes', notesController.createNote);

  // get the list of notes
  app.get('/api/notes', notesController.getNotes);

  // get a single note
  app.get('/api/notes/:id', notesController.getNote);

  // update a note
  app.put('/api/notes/:id', notesController.updateNote);

  // delete a note
  app.delete('/api/notes/:id', notesController.deleteNote);
}
