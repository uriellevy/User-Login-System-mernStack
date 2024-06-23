import { Request, Response } from "express"
import { handleError, handleSuccess } from "../utils/responseHandler";

export class UserController {
    static async createUser(req: Request, res: Response) {
        try {
            // const user = await UserService.createUser(req.body)
            // if (!user) {
            //     return handleError(res, 'User not found', 404);
            // }
            // handleSuccess(res, 'User fetched successfully', user);
        } catch (error) {
            handleError(res, (error as Error).message);
        }
    }
}