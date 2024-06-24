import { IUser, IUserAuth } from "../interfaces/user";
import bcrypt from 'bcrypt';
import { generateToken } from "../utils/jwt";
import User from "../models/user"
const SALT_ROUNDS = 10

export class UserService {
  static async createUser(userEntity: IUser) {
    const hashedPassword = await bcrypt.hash(userEntity.password, SALT_ROUNDS);
    const user = await User.createUser({ ...userEntity, password: hashedPassword });
    return user;
  }
  
  static async loginUser(userAuthEntity: IUserAuth) {
    const {email, password} = userAuthEntity;
    const user = await  User.findUserByEmail(email);
    if(!user) throw new Error('User not found');

    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if(!isPasswordMatch) throw Error("Incorrect password");

    const token = generateToken({userId: user._id, isAdmin:user.isAdmin});
    return token;
  }
  static async getAllUsers() {
    const users = await User.findAllUsers();
    return users;
  }

  static async getUserByEmail(email:string) {
    const users = await User.findUserByEmail(email);
    return users;
  }

  static async deleteUserById(id:string) {
    const users = await User.deleteUser(id);
    return users;
  }

  static async editUserById(id:string, userEntity: IUser) {
    const user = await User.editUser(id, userEntity);
    return user;
  }
}