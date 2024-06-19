import { IBlogInput } from "../interfaces/blog";
import Blog from "../models/blog";

class BlogService {
    public async getAllBlogs() {
        const blogs = await Blog.getAllBlogs();
        return { blogs };
    }

    public async createBlog(blogData: IBlogInput) {
        const newBlog = await Blog.createBlog(blogData);
        const blogs = await Blog.getAllBlogs();
        return { newBlog, blogs };
    }

    public async getBlogById(_id: string) {
        const blog = await Blog.getBlogById(_id);
        return { blog };
    }

    public async deleteBlogById(_id: string) {
        const deletedBlog = await Blog.deleteBlogById(_id);
        const blogs = await Blog.getAllBlogs();
        return { blogs, deletedBlog };
    }

    public async editBlogById(_id: string, blogData: IBlogInput) {
        const editedBlog = await Blog.editBlogById(_id, blogData);
        const blogs = await Blog.getAllBlogs();
        return { blogs, editedBlog };
    }

    public async toggleBlogLike(_id: string) {
      
    }
}

export const blogService = new BlogService();