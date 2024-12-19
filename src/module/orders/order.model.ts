import { Schema, model } from 'mongoose';
import { IOrder } from './order.interface';
import Product from '../product/product.model';

const orderSchema = new Schema<IOrder>({
    email: {
        type: String,
        required: [true, 'Please enter user email!'],
        ref: 'User'
    },
    product: {
        type: String,
        required: [true, 'Please provide product id!'],
        ref: 'Product'
    },
    quantity: {
        type: Number,
        required: [true, 'Please enter product quantity!'],
    },
    totalPrice: {
        type: Number,
        required: true
    },
},{
    timestamps: true
})

// calculate total price dynamically
orderSchema.pre('save', async function(next) {
    const order = this as IOrder;
    const product = await Product.findById(order.product);

    if (!product){
        throw new Error("Product not found!");
    }

    order.totalPrice = product.price * order.quantity;

    next();
});

// creating product model

// creating user model 
const Order = model<IOrder>("Order", orderSchema);

export default Order;