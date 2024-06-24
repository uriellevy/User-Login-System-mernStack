import jwt from "jsonwebtoken";
import User from "../models/user";


export const requireAuth = async (req, res, next) => {
    //verify authentiction
    const { authorization } = req.headers;

    if (!authorization) return res.status(400).json({ message: "Authorization token required" });

    const token = authorization.split(" ")[1];

    //verify token
    try {
        // Logging the secret to ensure it's correct
        console.log('JWT_SECRET:', process.env.JWT_SECRET);

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Logging the decoded token
        console.log('Decoded token:', decoded);

        const { userId } = jwt.verify(token, process.env.JWT_SECRET);
        req.userId = await User.findUserId(userId);
        next();
    } catch (error) {
        console.log(error);
        res.status(401).json({ message: 'Request not authoraized' });
    }
}