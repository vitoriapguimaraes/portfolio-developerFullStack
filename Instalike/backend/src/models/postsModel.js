import "dotenv/config";
import { ObjectId } from "mongodb";
import connectToDatabase from "../config/dbConfig.js";

let connection;
try {
  connection = await connectToDatabase(process.env.CONNECTION_STRING);
} catch (error) {
  console.error("Failed to connect to the database:", error.message);
  process.exit(1);
}

const DATABASE_NAME = "imersao-instabytes";
const COLLECTION_NAME = "posts";

export async function getAllPosts() {
  const db = connection.db(DATABASE_NAME);
  const collection = db.collection(COLLECTION_NAME);
  return collection.find().toArray();
}

export async function createPost(newPost) {
  const db = connection.db(DATABASE_NAME);
  const collection = db.collection(COLLECTION_NAME);
  return collection.insertOne(newPost);
}

export async function updatePost(id, updatedPost) {
  const db = connection.db(DATABASE_NAME);
  const collection = db.collection(COLLECTION_NAME);
  try {
    return collection.updateOne(
      { _id: new ObjectId(id) },
      { $set: updatedPost }
    );
  } catch (error) {
    console.error(`Failed to update post with ID ${id}:`, error.message);
    throw error;
  }
}