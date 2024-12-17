import { Router } from "express";
import { productController } from "./product.controller";

const productRouter = Router();

productRouter.post('/create-product', productController.createProduct);
productRouter.get('/', productController.getProduct);
productRouter.get('/:id', productController.getSingleProduct);
productRouter.put('/:id', productController.updateProduct);
productRouter.delete('/:id', productController.deleteProduct);



export default productRouter;