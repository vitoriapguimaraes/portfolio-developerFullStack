import { MongoClient } from 'mongodb';

export default async function connectToDatabase (stringConnection) {
  let mongoClient;

  try {
      mongoClient = new MongoClient(stringConnection);
      console.log('Connecting to the database cluster...');
      await mongoClient.connect();
      console.log('Successfully connected to MongoDB Atlas!');

      return mongoClient;
  } catch (erro) {
      console.error('Failed to connect to the database!', erro);
      process.exit();
  }
}