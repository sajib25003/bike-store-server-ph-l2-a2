import { Request, Response } from "express";
import User from "./user.model";
import { userService } from "./user.service";

// managing request & response
const createUser = async (req: Request, res: Response) => {
    try {
        const payload = req.body;

        const result = await userService.createUser(payload)

        res.json({
            success: true,
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
const getUser = async (req: Request, res: Response) => {
    try {

        const result = await userService.getUser();

        res.send({
            success: true,
            message: "User data fetched successfully",
            data: result
        })
    } catch (error: any) {
        res.json({
            success: false,
            message: "Failed to fetch user",
            error
        })
    }
}
const getSingleUser = async (req: Request, res: Response) => {
    try {
        const userId = req.params.id;
        const result = await userService.getSingleUser(userId);

        res.send({
            success: true,
            message: "User data fetched successfully",
            data: result
        })
    } catch (error: any) {
        res.json({
            success: false,
            message: "Failed to fetch user",
            error
        })
    }
}
const updateUser = async (req: Request, res: Response) => {
    try {
        const userId = req.params.id;
        const userData = req.body; 
        const result = await userService.updateUser(userId, userData);

        res.send({
            success: true,
            message: "User data updated successfully",
            data: result
        })
    } catch (error: any) {
        res.json({
            success: false,
            message: "Failed to update user",
            error
        })
    }
}
const deleteUser = async (req: Request, res: Response) => {
    try {

        const userId = req.params.id;  
        const result = await userService.deleteUser(userId);

        res.send({
            success: true,
            message: "User deleted successfully",
            data: result
        })
    } catch (error: any) {
        res.json({
            success: false,
            message: "Failed to delete user",
            error
        })
    }
}

export const userController = {
    createUser,
    getUser,
    getSingleUser,
    updateUser,
    deleteUser,
}