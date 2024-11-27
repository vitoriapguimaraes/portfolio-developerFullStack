import { MongoClient } from 'mongodb';

export default async function connectToDatabase(connectionString) {
  let mongoClient;

  try {
    console.log('Connecting to the MongoDB cluster...');
    mongoClient = new MongoClient(connectionString);
    await mongoClient.connect();
    console.log('Successfully connected to MongoDB Atlas!');

    return mongoClient;
  } catch (error) {
    console.error('Database connection failed:', error.message);
    if (mongoClient) {
      await mongoClient.close();
    }
    process.exit(1);
  }
}
