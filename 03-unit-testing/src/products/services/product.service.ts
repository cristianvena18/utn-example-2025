import ProductModel from '../models/product.model';
import { Product } from '../interfaces/product';
import IDGenerator from '../../shared/utils/id.generator';

export default class ProductService {
    constructor(private productModel: ProductModel) {}

    addProduct(name: string, price: number): Product {
        const product: Product = { id: IDGenerator.generate(), name, price };
        this.productModel.add(product);
        return product;
    }

    getProducts(): Product[] {
        return this.productModel.getAll();
    }
}