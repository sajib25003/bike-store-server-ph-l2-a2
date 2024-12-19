import { IProduct } from "./product.interface";
import Product from "./product.model";

const createProduct = async (payload: IProduct): Promise<IProduct> => {
    const result = await Product.create(payload);
    return result
}

const getProduct = async (searchTerm?: string) => {
    const filter: any = {};

    if (searchTerm) {
        filter.$or = [
            { name: { $regex: searchTerm, $options: "i" } },
            { brand: { $regex: searchTerm, $options: "i" } },
            { category: { $regex: searchTerm, $options: "i" } }
        ];
    }
    const result = await Product.find(filter);
    return result
}

const getSingleProduct = async (id: string) => {
    const result = await Product.findById(id);
    return result
}

const updateProduct = async (id: string, data: IProduct) => {
    const result = await Product.findByIdAndUpdate(id, data, { new: true });
    return result
}

const deleteProduct = async (id: string) => {
    const result = await Product.findByIdAndDelete(id);
    return result
}

const updateProductQuantity = async (id: string, quantity: number) => {
    const product = await Product.findById(id);
    if (product) {
        if (product.quantity < quantity) {
            throw new Error("Insufficient stock!")
        }
        product.quantity -= quantity;
        if (product.quantity <= 0){
            product.inStock = false;
        }
        await product.save();
    } else {
        throw new Error("Product not found!");
    }

    return product;
}

export const productService = {
    createProduct,
    getProduct,
    getSingleProduct,
    updateProduct,
    deleteProduct,
    updateProductQuantity
}