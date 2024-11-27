import express from "express";
import multer from "multer";
import { listPosts, createNewPost, uploadImage, updatePostWithImage } from "../controllers/postsController.js";
import cors from "cors";

const corsOptions = {
  origin: "http://localhost:8000",
  optionsSuccessStatus: 200
};

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1E9)}`;
    cb(null, `${uniqueSuffix}-${file.originalname}`);
  }
});

const upload = multer({ storage: storage });

const routes = (app) => {
  app.use(express.json());
  app.use(cors(corsOptions));
  app.get("/posts", listPosts);
  app.post("/posts", createNewPost);
  app.post("/upload", upload.single("image"), uploadImage);
  app.put("/upload/:id", updatePostWithImage);
};

export default routes;