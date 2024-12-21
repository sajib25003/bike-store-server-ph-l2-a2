import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import userRouter from './module/user/user.router';
import productRouter from './module/product/product.router';
import orderRouter from './module/orders/order.router';

const app: Application = express();

// parser
app.use(express.json());
app.use(cors());

app.use('/api/users', userRouter);
app.use('/api/products', productRouter);
app.use('/api/orders', orderRouter);



const getAController = (req: Request, res: Response) => {
    res.send({
        success: true,
        message: 'Welcome To Bike Store Server.'
    });
};

app.get('/', getAController);

export default app;
