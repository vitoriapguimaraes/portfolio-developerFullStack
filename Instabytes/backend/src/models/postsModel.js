import 'dotenv/config';
import { ObjectId } from "mongodb";
import connectToDatabase from "../config/dbConfig.js"
const connection = await connectToDatabase(process.env.CONNECTION_STRING);

// Função assíncrona para buscar todos os posts do banco de dados
export async function getAllPosts() {
    // Seleciona o banco de dados "imersao-instabytes"
    const db = connection.db("imersao-instabytes");
    // Seleciona a coleção "posts" dentro do banco de dados
    const collection = db.collection("posts");
    // Retorna um array com todos os documentos da coleção
    return collection.find().toArray();
}

export async function createPost(newPost) {
    const db = connection.db("imersao-instabytes");
    const collection = db.collection("posts");
    return collection.insertOne(newPost);
}

export async function updatePost(id, newPost) {
    const db = connection.db("imersao-instabytes");
    const collection = db.collection("posts");
    const objID = ObjectId.createFromHexString(id);
    return collection.updateOne({_id: new ObjectId(objID)}, {$set:newPost});
}