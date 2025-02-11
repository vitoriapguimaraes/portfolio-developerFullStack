import {getAllPosts, createPost, updatePost} from "../models/postsModel.js";
import fs from "fs";
import generateDescriptionWithGemini from "../services/geminiService.js";

export async function listPosts(req, res) {
    const posts = await getAllPosts();
    res.status(200).json(posts);
}

export async function postNewPost(req, res) {
    const newPost = req.body;
    try {
        const postCreated = await createPost(newPost);
        res.status(200).json(postCreated);  
    } catch(erro) {
        console.error(erro.message);
        res.status(500).json({"Error": "Request failed"})
    }
}

export async function uploadImage(req, res) {
    const newPost = {
        description: "",
        imgUrl: req.file.originalname,
        alt: ""
    };

    try {
        const postCreated = await createPost(newPost);
        const imageUpdated = `uploads/${postCreated.insertedId}.png`
        fs.renameSync(req.file.path, imageUpdated)
        res.status(200).json(postCreated);  
    } catch(erro) {
        console.error(erro.message);
        res.status(500).json({"Error": "Request failed"})
    }
}

export async function updateNewPost(req, res) {
    const id = req.params.id;
    const urlImage = `http://localhost:3000/${id}.png`
    try {
        const imgBuffer = fs.readFileSync(`uploads/${id}.png`)
        const description = await generateDescriptionWithGemini(imgBuffer)
        const post = {
            imgUrl: urlImage,
            description: description,
            alt: req.body.alt
        }
        const postCreated = await updatePost(id, post);
        res.status(200).json(postCreated);  
    } catch(erro) {
        console.error(erro.message);
        res.status(500).json({"Error": "Request failed"});
    }
}