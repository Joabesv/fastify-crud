import Note from '../models/Note.js';

export default function contentRangeHook(request, reply, next) {
  Note.count({}, (err, count) => {
    if (err) {
      console.log(`Error ${err}`);
      reply.code(500).send('Error!');
    }
    reply.header('Content-Range', `notes 0-10/${count}`);
    next();
  });
}
