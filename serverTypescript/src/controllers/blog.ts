import { Request, Response, NextFunction } from 'express';
import { IBlogInput } from '../interfaces/blog';
import {blogService} from '../services/blog';

export const getAllBlogs = async (req:Request,res:Response) => {
    try {
        const {blogs} = await blogService.getAllBlogs();
        res.status(200).json({message:"blogs recieved successfully",data:{blogs}});
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const createBlog = async (req:Request,res:Response) => {
    const {title,subtitle,content,image} = req.body as IBlogInput;  
    const blogData = {title,subtitle,content,image};
    try {
        const { newBlog, blogs } = await blogService.createBlog(blogData);
        res.status(201).json({message:"Blog created successfully",data:{newBlog,blogs}});
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const getBlogById = async (req:Request,res:Response) => {
    const {id} = req.params;  
    try {
        const { blog } = await blogService.getBlogById(id);
        if(!blog) return res.status(404).json({message:"Blog not found"});
        res.status(200).json({message:`Blog with id ${id} recieved successfully`,data:{blog}});
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const deleteBlogById = async (req:Request,res:Response) => {
    const {id} = req.params;  
    try {
        const { deletedBlog, blogs } = await blogService.deleteBlogById(id);
        if(!deletedBlog) return res.status(404).json({message:"Blog not found"});
        res.status(200).json({message:`Blog with id ${id} deleted successfully`,data:{deletedBlog, blogs}});
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const editBlogById = async (req:Request,res:Response) => {
    const {title,subtitle,content,image} = req.body as IBlogInput;  
    const editedData = {title,subtitle,content,image};
    const {id} = req.params;  
    try {
        const { editedBlog, blogs } = await blogService.editBlogById(id, editedData);
        if(!editedBlog) return res.status(404).json({message:"Blog not found"});
        res.status(200).json({message:`Blog with id ${id} edited successfully`,data:{editedBlog, blogs}});
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}
