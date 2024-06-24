import express from "express";
import { createBlog, deleteBlogById, editBlogById, getAllBlogs, getBlogById } from "../controllers/blog";
import { blogValidationRules } from "../validators/blog";
import { validateBlogRequest } from "../middlewares/validateBlogRequest";
import { requireAuth } from "../middlewares/requireAuth";


const router = express.Router();

router.get("/", getAllBlogs);
router.use(requireAuth);
router.post("/",blogValidationRules,validateBlogRequest, createBlog);
router.get("/:id", getBlogById);
router.delete("/:id", deleteBlogById);
router.put("/:id", editBlogById);


export default router;