import { IOrder } from "./order.interface";
import Order from "./order.model";

const createOrder = async (payload: IOrder): Promise<IOrder> => {
    const result = await Order.create(payload);
    return result
}

const calculateTotalRevenue = async (): Promise<number> => {
    const result = await Order.aggregate([
        {
            $addFields: {
                productId: { $toObjectId: "$product" }, 
            },
        },
        {
            $lookup: {
                from: "products", 
                localField: "productId",
                foreignField: "_id",
                as: "productDetails",
            },
        },
        {
            $unwind: "$productDetails", 
        },
        {
            $group: {
                _id: null, 
                totalRevenue: {
                    $sum: {
                        $multiply: ["$productDetails.price", "$quantity"], 
                    },
                },
            },
        },
    ])

    return result[0]?.totalRevenue || 0;
}

const getOrders = async () => {
    const result = await Order.find();
    return result
}

export const orderService = {
    createOrder,
    calculateTotalRevenue,
    getOrders,
}