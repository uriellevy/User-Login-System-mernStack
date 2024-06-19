import mongoose from "mongoose";
import imageSchema from "./image";

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    subtitle: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    image: {
        type: imageSchema,
        required: true,
    },
    likes: [{ type: String }],
    // userId: { type: String, required: true },
}, { timestamps: true });

export default blogSchema;