const { Router } = require("express");
const postRouter = Router();
const { getAllPosts, getPostsByUser, addPost, updatePost, deletePost } = require("../controllers/posts");
const { auth } =require("../middleware")


postRouter.get("/posts", getAllPosts);
postRouter.get("/posts/:user_id", auth, getPostsByUser);
postRouter.post("/posts/:user_id", auth, addPost);
postRouter.patch("/posts/:id", auth, updatePost);
postRouter.delete("/posts/:id", auth, deletePost);

module.exports = {
  postRouter,
};