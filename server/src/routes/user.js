import express from 'express';
import {signupUser,loginUser, getAllUsers} from "../controllers/user.js";

const router = express.Router();

router.get('/', getAllUsers);
router.post('/login', loginUser);
router.post('/signup', signupUser);

export default router;