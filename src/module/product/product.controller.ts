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
    } catch (error: unknown) {
        res.json({
            success: false,
            message: "Failed to create bike!",
            error
        })
    }
}

const getProduct = async (req: Request, res: Response) => {
    try {

        const { searchTerm } = req.query;
        const products = await productService.getProduct(searchTerm as string);

        const result = products.map(product => ({
            _id: product._id,
            name: product.name,
            brand: product.brand,
            price: product.price,
            description: product.description,
            category: product.category,
            quantity: product.quantity,
            inStock: product.inStock,
            createdAt: product.createdAt, 
            updatedAt: product.updatedAt  
        }));

        res.send({
            status: true,
            message: "Bikes fetched successfully",
            data: result
        })
    } catch (error: unknown) {
        res.json({
            status: false,
            message: "Failed to fetch bikes!",
            error
        })
    }
}
const getSingleProduct = async (req: Request, res: Response) => {
    try {
        const userId = req.params.productId;
        const result = await productService.getSingleProduct(userId);

        res.send({
            status: true,
            message: "Bike data fetched successfully",
            data: result
        })
    } catch (error: unknown) {
        res.json({
            status: false,
            message: "Failed to fetch bike",
            error
        })
    }
}
const updateProduct = async (req: Request, res: Response) => {
    try {
        const id = req.params.productId;
        const data = req.body; 
        const result = await productService.updateProduct(id, data);

        res.send({
            status: true,
            message: "Bike updated successfully",
            data: result
        })
    } catch (error: unknown) {
        res.json({
            status: false,
            message: "Failed to update bike",
            error
        })
    }
}
const deleteProduct = async (req: Request, res: Response) => {
    try {

        const id = req.params.productId;  
        await productService.deleteProduct(id);

        res.send({
            status: true,
            message: "Bike deleted successfully",
            data: {}
        })
    } catch (error: unknown) {
        res.json({
            status: false,
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