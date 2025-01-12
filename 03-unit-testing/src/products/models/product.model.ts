import { Product } from '../interfaces/product';

export default class ProductModel {
    private products: Product[] = [];

    add(product: Product): void {
        this.products.push(product);
    }

    getAll(): Product[] {
        return this.products;
    }

    findById(id: string): Product | undefined {
        return this.products.find((product) => product.id === id);
    }
}