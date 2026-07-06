import app from './src/app.js';
import config from './src/config/env.js';
import connectDB from './src/config/db.js';

connectDB();
const server = app.listen(config.port, () => {
  console.log(`EventHive Engine running via ES Modules in [${config.env}] mode on port ${config.port}`);
});

process.on('unhandledRejection', (err) => {
  console.error(`UNHANDLED PROMISE REJECTION: ${err.message}`);
  server.close(() => process.exit(1));
});