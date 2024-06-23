import { Schema } from 'mongoose';
import { IUser } from '../../interfaces/user';

const userSchema = new Schema<IUser>({
    firstName: { type: String, required: true, unique: false },
    lastName: { type: String, required: true, unique: false },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
}, { timestamps: true });

export default userSchema;