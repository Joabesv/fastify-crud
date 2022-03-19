import 'dotenv/config';
import connectDatabase from './database/database.js';

import app from './server.js';

// connect to mongoose
(async () => {
  connectDatabase();
  app.listen(process.env.PORT, (err, address) => {
    if (err) throw err;
    return console.log(`Server Started at ${address}`);
  });
})();

app.get('/', async (request, reply) => {
  reply.send({ hello: 'World' }).code(200);
});
