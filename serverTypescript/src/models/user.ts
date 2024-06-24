import mongoose, { Model } from "mongoose";
import userSchema from "./schemas/user";
import { IUser } from "../interfaces/user";

interface IUserModel extends Model<IUser> {
    findUserByEmail( email: string): Promise<IUser | null>
    findUserById(id: string): Promise<IUser | null>
    createUser( userEntity: IUser): Promise<IUser | null>
    deleteUser( id: string): Promise<IUser | null>
    editUser( id: string, userEntity: IUser): Promise<IUser | null>
    findAllUsers(): Promise<IUser[] | null>
    findUserId( id: string): Promise<string | null>
}

class UserClass {

    static async findAllUsers(this: IUserModel): Promise<IUser[] | null> {
        return await this.find().select('-password');
    }

    static async findUserByEmail(this: IUserModel, email: string): Promise<IUser | null> {
        return await this.findOne({ email });
    }

    static async findUserById(this: IUserModel, id: string): Promise<IUser | null> {
        return await this.findOne({ id }).select('-password');
    }
    static async findUserId(this: IUserModel, id: string): Promise<string | null> {
        return await this.findOne({ id }).select('_id');
    }

    static async createUser(this: IUserModel, userEntity: IUser): Promise<IUser | null> {
        return await this.create({ ...userEntity });
    }

    static async deleteUser(this: IUserModel, id: string): Promise<IUser | null> {
        return await this.findByIdAndDelete({ _id: id }).select('-password');
    }

    static async editUser(this: IUserModel, id: string, userEntity: IUser): Promise<IUser | null> {
        return await this.findByIdAndUpdate({ _id: id},{...userEntity}).select('-password');
    }
}

userSchema.loadClass(UserClass);

const User = mongoose.model<IUser,IUserModel>("User", userSchema);

export default User;