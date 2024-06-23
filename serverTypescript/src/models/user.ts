import mongoose from "mongoose";
import userSchema from "./schemas/user";
import { IUser } from "../interfaces/user";

const User = mongoose.model<IUser>("User", userSchema);

export default User;