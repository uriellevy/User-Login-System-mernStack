import mongoose from "mongoose";

const imageSchema = new mongoose.Schema({
  alt: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
}, {_id: false});

export default imageSchema;