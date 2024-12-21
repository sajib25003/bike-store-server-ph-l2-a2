import { Request, Response } from "express";
import { orderService } from "./order.service";
import { userService } from "../user/user.service";
import { productService } from "../product/product.service";

const createOrder = async (req: Request, res: Response): Promise<void> => {
    try {
        const payload = req.body;

        const { email, product, quantity, totalPrice } = payload;

        if (!product || !quantity || !email || !totalPrice) {
            res.status(400).json({
                status: false,
                message: "Product, quantity, email, and total price are required!",
            });
        }

        const user = await userService.findUserByEmail(email); // Replace with your User service
        if (!user) {
            res.status(404).json({
                status: false,
                message: "User with the given email does not exist!",
            });
            return
        }

        const productData = await productService.getSingleProduct(product);

        if (!productData || !productData.inStock) {
            res.status(400).json({
                status: false,
                message: productData
                    ? "Insufficient stock!"
                    : "Product not found!",
            });
            return
        }

        // Update the product quantity after the stock check
        await productService.updateProductQuantity(product, quantity);

        const result = await orderService.createOrder(payload);

        res.json({
            status: true,
            message: "Order created successfully",
            data: result
        })
        return
    } catch (error: unknown) {
        res.json({
            status: false,
            message: "Failed to create order!",
            error
        })
        return
    }
}

const getTotalRevenue = async (req: Request, res: Response) => {
    try {

        const totalRevenue = await orderService.calculateTotalRevenue();

        res.json({
            status: true,
            message: "Total revenue calculated successfully",
            data: { totalRevenue }
        })
    } catch (error: unknown) {
        res.json({
            status: false,
            message: "Failed to calculate total revenue!",
            error: error || "An error occurred while creating"
        })
    }
}

const getOrders = async (req: Request, res: Response) => {
    try {

        const orders = await orderService.getOrders();

        const result = orders.map(order => ({
            email: order.email,
            product: order.product,
            quantity: order.quantity,
            totalPrice: order.totalPrice,
            createdAt: order.createdAt,
            updatedAt: order.updatedAt
        }));

        res.send({
            status: true,
            message: "Orders fetched successfully",
            data: result
        })
    } catch (error: unknown) {
        res.json({
            status: false,
            message: "Failed to fetch orders!",
            error
        })
    }
}

export const orderController = {
    createOrder,
    getTotalRevenue,
    getOrders,
}