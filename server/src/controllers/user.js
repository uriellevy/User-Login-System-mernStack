import User from '../models/user.js';
import jwt from "jsonwebtoken";

const createToken = (id,email) => {
    return jwt.sign({_id:id,email:email}, process.env.SECRET,{expiresIn: "3d"});
}

export const loginUser = async (req,res) => {
    const {email, password} = req.body;

    try {
       const user = await User.login(email,password);
       const token = createToken(user._id, user.email);

        res.status(200).json({email,token})
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}


export const signupUser = async (req,res) => {
    const {email, password} = req.body;

    try {
        const user = await User.signup(email, password);
        //create a token
        const token = createToken(user._id,user.email);

        res.status(200).json({email,token})
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}