import mongoose from 'mongoose';
import config from './env.js';

mongoose.connection.on('connected', () => {
    console.log('Mongoose connection event: Active');
});

mongoose.connection.on('disconnected', () => {
    console.warn('CRITICAL: Database connection lost! Mongoose will automatically try to reconnect...');
});

mongoose.connection.on('error', (err) => {
    console.error(`Runtime database error occurred: ${err.message}`);
});

const ConnectDB=async()=>{
    try{
        const conn=await mongoose.connect(config.mongoUri);
        console.log(`MongoDb Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Database Connection Failure:${error.message}`);
        process.exit(1);
    }
}

export default ConnectDB;