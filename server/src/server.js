import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import todoRoutes from './routes/todo.js';
import userRoutes from './routes/user.js';


const PORT = process.env.PORT || 4005;

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/todos', todoRoutes);
app.use('/api/user', userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on  http://localhost:${PORT}`);
});

mongoose.connect(process.env.MONGOOSE_URI)
.then(() => console.log("mongoose connected"))
.catch((error) => console.log(error))
