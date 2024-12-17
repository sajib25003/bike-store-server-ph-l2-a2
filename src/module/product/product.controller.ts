import { Request, Response } from "express";
import { productService } from "./product.service";

const createProduct = async (req: Request, res: Response) => {
    try {
        const payload = req.body;

        const result = await productService.createProduct(payload)

        res.json({
            success: true,
            message: "Bike created successfully",
            data: result
        })
    } catch (error: any) {
        res.json({
            success: false,
            message: "Failed to create bike!",
            error
        })
    }
}

const getProduct = async (req: Request, res: Response) => {
    try {

        const result = await productService.getProduct();

        res.send({
            success: true,
            message: "Bikes fetched successfully",
            data: result
        })
    } catch (error: any) {
        res.json({
            success: false,
            message: "Failed to fetch bikes!",
            error
        })
    }
}
const getSingleProduct = async (req: Request, res: Response) => {
    try {
        const userId = req.params.id;
        const result = await productService.getSingleProduct(userId);

        res.send({
            success: true,
            message: "Bike data fetched successfully",
            data: result
        })
    } catch (error: any) {
        res.json({
            success: false,
            message: "Failed to fetch bike",
            error
        })
    }
}
const updateProduct = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const data = req.body; 
        const result = await productService.updateProduct(id, data);

        res.send({
            success: true,
            message: "Bike updated successfully",
            data: result
        })
    } catch (error: any) {
        res.json({
            success: false,
            message: "Failed to update bike",
            error
        })
    }
}
const deleteProduct = async (req: Request, res: Response) => {
    try {

        const id = req.params.id;  
        const result = await productService.deleteProduct(id);

        res.send({
            success: true,
            message: "Bike deleted successfully",
            data: result
        })
    } catch (error: any) {
        res.json({
            success: false,
            message: "Failed to delete bike",
            error
        })
    }
}

export const productController = {
    createProduct,
    getProduct,
    getSingleProduct,
    updateProduct,
    deleteProduct
}