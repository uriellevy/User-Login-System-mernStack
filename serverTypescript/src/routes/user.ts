import express from "express";
import { UserController } from "../controllers/user";

const router = express.Router();

router.get("/", UserController.getAllUsers);
router.post("/signup", UserController.createUser);
router.post("/login", UserController.loginUser);
router.delete("/:id", UserController.deleteUserById);

export default router;