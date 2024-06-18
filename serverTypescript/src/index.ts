import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import morgan from 'morgan';
import chalk from 'chalk';
import blogRoutes from "./routes/blog";

const log = console.log;
log(chalk.blue.bgRed.bold('Hello world!'));

const PORT = process.env.PORT || 4005;

dotenv.config();
const app = express();
app.use(morgan('dev'));

app.use(cors());
app.use(express.json());
app.use("/api/blogs",blogRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on  http://localhost:${PORT}`);
});

mongoose.connect(process.env.MONGOOSE_URI_LOCAL)
.then(() => console.log("mongoose connected"))
.catch((error) => console.log(error))
