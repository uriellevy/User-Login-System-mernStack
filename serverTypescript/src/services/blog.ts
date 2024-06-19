import { IBlogInput } from "../interfaces/blog";
import Blog from "../models/blog";

class BlogService {
    public async getAllBlogs() {
        const blogs = await Blog.find();
        return { blogs };
    }

    public async createBlog(blogData: IBlogInput) {
        const blog = new Blog(blogData);
        const newBlog = await blog.save();
        const blogs = await Blog.find();
        return { newBlog, blogs };
    }

    public async getBlogById(_id: string) {
        const [blog] = await Blog.find({ _id });
        return { blog };
    }

    public async deleteBlogById(_id: string) {
        const deletedBlog = await Blog.findByIdAndDelete(_id);
        const blogs = await this.getAllBlogs();
        return { blogs, deletedBlog };
    }

    public async editBlogById(_id: string, blogData: IBlogInput) {
        const editedBlog = await Blog.findByIdAndUpdate(_id, blogData);
        const blogs = await this.getAllBlogs();
        return { blogs, editedBlog };
    }
}

export const blogService = new BlogService();