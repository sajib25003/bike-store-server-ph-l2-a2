import { model, Schema } from "mongoose";
import { IProduct } from "./product.interface";

const productSchema = new Schema<IProduct>({
    name: {
        type: String,
        required: [true, 'Please enter product name!'],
        unique: true
    },
    brand: {
        type: String,
        required: [true, 'Please enter product brand!'],
    },
    price: {
        type: Number,
        required: [true, 'Please enter product price!'],
    },
    category: {
        type: String,
        required: true,
        enum: { values: ['Mountain', 'Road', 'Hybrid', 'Elecric'], message: '{VALUE} is not valid. Please provide a valid category!' },
        default: 'Mountain'
    },
    description: {
        type: String,
        required: [true, 'Please enter product description!'],
    },
    quantity: {
        type: Number,
        required: [true, 'Please enter product quantity!'],
    },
    inStock: {
        type: Boolean,
        required: [true, 'Please enter product price!'],
        default: true
    },
})

const Product = model<IProduct>("Product", productSchema);

export default Product;