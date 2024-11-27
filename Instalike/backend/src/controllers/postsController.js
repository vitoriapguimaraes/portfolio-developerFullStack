import { getAllPosts, createPost, updatePost } from "../models/postsModel.js";
import fs from "fs/promises";
import generateDescriptionWithGemini from "../services/geminiService.js";

export async function listPosts(req, res) {
  try {
    const posts = await getAllPosts();
    res.status(200).json(posts);
  } catch (error) {
    console.error("Error fetching posts:", error.message);
    res.status(500).json({ error: "Failed to fetch posts." });
  }
}

export async function createNewPost(req, res) {
  const newPost = req.body;

  if (!newPost || Object.keys(newPost).length === 0) {
    return res.status(400).json({ error: "Post data is missing or invalid." });
  }

  try {
    const createdPost = await createPost(newPost);
    res.status(201).json(createdPost);
  } catch (error) {
    console.error("Error creating a new post:", error.message);
    res.status(500).json({ error: "Failed to create a new post." });
  }
}

export async function uploadImage(req, res) {
  const newPost = {
    description: "",
    imgUrl: req.file?.originalname || "",
    alt: "",
  };

  try {
    const createdPost = await createPost(newPost);
    const updatedImagePath = `uploads/${createdPost.insertedId}.png`;

    await fs.rename(req.file.path, updatedImagePath);

    res.status(200).json(createdPost);
  } catch (error) {
    console.error("Error uploading the image:", error.message);
    res.status(500).json({ error: "Failed to upload the image." });
  }
}

export async function updatePostDescription(req, res) {
  const id = req.params.id;
  const imageUrl = `http://localhost:3000/${id}.png`;

  try {
    const imageBuffer = await fs.readFile(`uploads/${id}.png`);
    const description = await generateDescriptionWithGemini(imageBuffer);

    const updatedPost = {
      imgUrl: imageUrl,
      description: description,
      alt: req.body.alt,
    };

    const result = await updatePost(id, updatedPost);
    res.status(200).json(result);
  } catch (error) {
    console.error("Error updating the post:", error.message);
    res.status(500).json({ error: "Failed to update the post." });
  }
}