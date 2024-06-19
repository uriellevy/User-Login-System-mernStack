import express from "express";
import { createBlog, deleteBlogById, editBlogById, getAllBlogs, getBlogById } from "../controllers/blog";


const router = express.Router();

router.get("/", getAllBlogs);
router.post("/", createBlog);
router.get("/:id", getBlogById);
router.delete("/:id", deleteBlogById);
router.put("/:id", editBlogById);


export default router;