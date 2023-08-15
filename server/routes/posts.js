import express from "express";
import { getFeedPosts, getUserPosts, likePost, addComment, getComments, deleteComment } from "../controllers/posts.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

/* READ */
router.get("/", verifyToken, getFeedPosts);
router.get("/:userId/posts", verifyToken, getUserPosts);

/* UPDATE */
router.patch("/:id/like", verifyToken, likePost);

/* COMMENTS */
router.post("/:id/comment", verifyToken, addComment); // Add a comment to a post
router.get("/:id/comments", verifyToken, getComments); // Get comments for a post
router.delete("/:id/comment/:commentId", verifyToken, deleteComment); // Delete a comment

export default router;
