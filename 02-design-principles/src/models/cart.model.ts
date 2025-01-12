import {Product} from "./product.model";
import {v4} from "uuid";

export class Cart {
    id: string;
    userId: string;
    products: Product[];

    constructor(userId: string) {
        this.id = v4()
        this.userId = userId;
        this.products = []
    }

    addProduct(product: Product) {
        this.products.push(product);
    }
}