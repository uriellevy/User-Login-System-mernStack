import mongoose, { Model } from "mongoose";
import { IBlogDocument, IBlogInput } from '../interfaces/blog';
import blogSchema from "./schemas/blog";

interface IBlogModel extends Model<IBlogDocument> {
    getAllBlogs(): Promise<IBlogDocument[]>;
    createBlog(blogData: IBlogInput): Promise<IBlogDocument>;
    getBlogById(id: string): Promise<IBlogDocument | null>;
    deleteBlogById(id: string): Promise<IBlogDocument | null>;
    editBlogById(id: string, blogData: IBlogInput): Promise<IBlogDocument | null>;
}

class BlogClass {
    static async getAllBlogs(this: IBlogModel): Promise<IBlogDocument[]> {
        return await this.find();
    }

    static async createBlog(this: IBlogModel, blogData: IBlogInput): Promise<IBlogDocument> {
        const blog = new this(blogData);
        await blog.save();
        return blog;
    }

    static async getBlogById(this: IBlogModel, id: string): Promise<IBlogDocument | null> {
        return await this.findById(id);
    }

    static async deleteBlogById(this: IBlogModel, id: string): Promise<IBlogDocument | null> {
        return await this.findByIdAndDelete(id);
    }

    static async editBlogById(this: IBlogModel, id: string, blogData: IBlogInput): Promise<IBlogDocument | null> {
        return await this.findByIdAndUpdate(id, blogData, { new: true });
    }
}

blogSchema.loadClass(BlogClass);

const Blog = mongoose.model<IBlogDocument, IBlogModel>("Blog", blogSchema);

export default Blog;