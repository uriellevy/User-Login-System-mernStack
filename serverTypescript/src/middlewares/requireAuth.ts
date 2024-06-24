import { Request, Response, NextFunction } from 'express';
import jwt from "jsonwebtoken";
import User from "../models/user";

export interface AuthenticatedRequest extends Request {
    isAdmin?: boolean;
    userId?: string;
}


export const requireAuth = async (req:AuthenticatedRequest, res:Response, next) => {
    const { authorization } = req.headers;

    if (!authorization) return res.status(400).json({ message: "Authorization token required" });

    const token = authorization.split(" ")[1];
    try {
        const { userId, isAdmin } = jwt.verify(token, process.env.JWT_SECRET);
        req.userId = await User.findUserId(userId);
        req.isAdmin = isAdmin;

        next();
    } catch (error) {
        console.log(error);
        res.status(401).json({ message: 'Request not authoraized' });
    }
}