import express from "express";
import { createBlog, deleteBlogById, editBlogById, getAllBlogs, getBlogById } from "../controllers/blog";
import { blogValidationRules } from "../validators/blog";
import { validateBlogRequest } from "../middlewares/validateBlogRequest";
import { requireAuth } from "../middlewares/requireAuth";


const router = express.Router();

router.get("/", getAllBlogs);
router.post("/",blogValidationRules,validateBlogRequest,requireAuth, createBlog);
router.get("/:id",requireAuth, getBlogById);
router.delete("/:id", deleteBlogById);
router.put("/:id",requireAuth, editBlogById);


export default router;