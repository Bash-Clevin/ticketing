import mongoose from 'mongoose';
import { DatabaseConnectionError } from './errors/databaseConnectionError';
import app from './app';

const start = async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/auth');
    console.log('Connected to db');
  } catch (error) {
    throw new DatabaseConnectionError();
  }

  app.listen(3000, () => {
    console.log('Listening on port 3000!');
  });
};

start();
