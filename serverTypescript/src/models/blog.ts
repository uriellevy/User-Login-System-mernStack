import mongoose from "mongoose";
import blogSchema from "./schemas/blog";

const Blog = mongoose.model("Blog", blogSchema);

export default Blog;
