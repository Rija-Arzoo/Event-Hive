import dotenv from 'dotenv';
import {fileURLToPath} from 'url';
import path from 'path';

const __filename=fileURLToPath(import.meta.url);
const __dirname=path.dirname(__filename);

dotenv.config({path:path.resolve(__dirname,"../../.env")});

const config={
    env:process.env.NODE_ENV || 'development',
    port:parseInt(process.env.PORT,10 )|| 5000,
    mongoUri:process.env.MONGO_URI,
    jwtSecret:process.env.JWT_SECRET,
    clientUrl: process.env.CLIENT_URL || 'http://localhost:5173',
    redisUrl: process.env.REDIS_URL || 'redis://localhost:6379'
};

const requiredKeys = ['MONGO_URI', 'JWT_SECRET'];
for (const key of requiredKeys) {
  if (!process.env[key]) {
    console.error(`CRITICAL CONFIG ERROR: Missing environment variable [${key}]`);
    process.exit(1);
  }
}

export default config;

