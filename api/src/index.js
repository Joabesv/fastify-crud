import 'dotenv/config';

import cors from 'fastify-cors';
import connectDatabase from './database/database.js';
import app from './server.js';
import noteRoutes from './routes/noteRoutes.js';
import contentRangeHook from './hooks/contentRangeHook.js';
// adding hook to handle the content range that react admin needs
app.addHook('preHandler', contentRangeHook);
app.register(cors, {
  origin: '*',
});
// handler
noteRoutes(app);

// connect to mongoose
(async () => {
  connectDatabase();
  app.listen(process.env.PORT, (err, address) => {
    if (err) throw err;
    return console.log(`Server Started at ${address}`);
  });
})();
