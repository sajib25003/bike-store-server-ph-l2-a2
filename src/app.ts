import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import userRouter from './module/user/user.router';

const app: Application = express();

// parser
app.use(express.json());
app.use(cors());

app.use('/api/v1/user', userRouter);

const getAController = (req: Request, res: Response) => {
    res.send({
        success: true,
        message: 'Welcome To Bike Store Server.'
    });
};

app.get('/', getAController);

export default app;
