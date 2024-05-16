import User from '../models/user.js';

export const loginUser = async (req,res) => {
    try {
        res.status(200).json({message: "login user"})
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}


export const signupUser = async (req,res) => {
    try {
        res.status(200).json({message: "signup user"})
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}