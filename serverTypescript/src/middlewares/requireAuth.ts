import jwt from "jsonwebtoken";
import User from "../models/user";


export const requireAuth = async (req,res,next) => {
    //verify authentiction
    const {authorization} = req.headers;

    if(!authorization) return res.status(400).json({message: "Authorization token required"});

    const token = authorization.split(" ")[1];

    //verify token
    try {
        const {_id} = jwt.verify(token,process.env.JWT_SECRET);
        req.userId = await User.findUserId(_id);
        next();
    } catch (error) {
        console.log(error);
        res.status(401).json({message: 'Request not authoraized'});
    }
}