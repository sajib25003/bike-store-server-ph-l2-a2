import { Schema, model } from 'mongoose';
import { IOrder } from './order.interface';
import Product from '../product/product.model';

const orderSchema = new Schema<IOrder>({
    email: {
        type: String,
        required: [true, 'Please enter your email!'],
        unique: true,
        validate: {
            validator: function (value: string) {
                return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(value)
            },
            message: '{VALUE} is not a valid email. '
        },
        immutable: true
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