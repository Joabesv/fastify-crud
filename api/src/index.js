import 'dotenv/config';

import connectDatabase from './database/database.js';
import app from './server.js';
import { noteRoutes } from './routes/noteRoutes.js';

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
