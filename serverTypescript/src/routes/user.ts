import express from "express";
import { UserController } from "../controllers/user";
import { requireAuth } from "../middlewares/requireAuth";
import { requireAdmin } from "../middlewares/requireAdmin";

const router = express.Router();

router.get("/", UserController.getAllUsers);
router.post("/signup", UserController.createUser);
router.post("/login", UserController.loginUser);
router.delete("/:id",requireAuth,requireAdmin, UserController.deleteUserById);
router.put("/:id", UserController.editUserById);

export default router;