import { Request, Response, NextFunction } from 'express';

export interface AuthenticatedRequest extends Request {
    isAdmin?: boolean;
    userId?: string;
}

export const requireAdmin = (req:AuthenticatedRequest, res:Response, next) => {
    if (req.isAdmin) {
        next();
    } else {
        res.status(403).json({ message: 'Access denied. Admins only.' });
    }
};