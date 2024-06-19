import mongoose from "mongoose";
import chalk from 'chalk';

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGOOSE_URI_LOCAL);
        console.log(chalk.blue.bgBlue.bold('mongoose connected!'));
    } catch (error) {
        console.log(chalk.blue.bgRed.bold(error));
    }
}