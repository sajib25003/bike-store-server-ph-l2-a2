import { Request, Response } from "express";
import User from "./user.model";

// managing request & response
const createUser = async (req: Request, res: Response) => {
    try {
        const payload = req.body;

        const result = await User.create(payload)

        res.json({
            message: "User created successfully",
            data: result
        })
    } catch (error: any) {
        res.json({
            success: false,
            message: "Failed to create user",
            error
        })
    }
}

export const userController = {
    createUser,
}