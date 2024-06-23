import { IUser } from "../interfaces/user";

import bcrypt from 'bcrypt';

const SALT_ROUNDS = 10

export class UserService {
    static async createUser(userData:IUser){
        const {email, password} = userData;
        const hashedPassword = await bcrypt.hash(password, 10);
        // const user = new User({ email, password: hashedPassword });
        // await user.save();
        // return user;
      }
}