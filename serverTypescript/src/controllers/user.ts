import { Request, Response } from "express"
import { handleError, handleSuccess } from "../utils/responseHandler";
import { UserService } from "../services/user";
import { IUserAuth } from "../interfaces/user";

export class UserController {
    static async createUser(req: Request, res: Response) {
        try {
            const user = await UserService.createUser(req.body);
            if (!user) {
                return handleError(res, 'User not found', 404);
            }
            handleSuccess(res, 'User created successfully', user);
        } catch (error) {
            handleError(res, (error as Error).message);
        }
    }
    static async getAllUsers(req: Request, res: Response) {
        try {
            const users = await UserService.getAllUsers();
            if (!users) {
                return handleError(res, 'Users not found', 404);
            }
            handleSuccess(res, 'Users fetched successfully', users);
        } catch (error) {
            handleError(res, (error as Error).message);
        }
    }

    static async loginUser(req: Request, res: Response) {
        try {
            const token = await UserService.loginUser(req.body as IUserAuth);
            handleSuccess(res, "Login successful", { token })
        } catch (err) {
            handleError(res, (err as Error).message, 401)
        }
    }

    static async deleteUserById(req: Request, res: Response) {
        const {id} = req.params;
        try {
            const deleted = await UserService.deleteUserById(id);
            handleSuccess(res, "User deleted successful", { deleted })
        } catch (err) {
            handleError(res, (err as Error).message, 401)
        }
    }
}