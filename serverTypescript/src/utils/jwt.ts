import jwt from 'jsonwebtoken';
import { IJWTPayload } from '../interfaces/user';
import dotenv from "dotenv";

dotenv.config();

const EXPIRE_TIME = "24h"
const secret = process.env.JWT_SECRET || 'your-secret-key'

export const generateToken = (payload: IJWTPayload): string => {
    console.log(secret)
    if (!secret) throw new Error('JWT_SECRET is not defined in environment variables');
    return jwt.sign(payload, secret, {expiresIn: EXPIRE_TIME})
}

export const verifyToken = (token: string): any => {
    try {
        return jwt.verify(token, secret)
    } catch (err) {
        return null
    }
}