import {getProduct} from "../database/products";
import {Product} from "../models/product.model";

const getProductById= (id: string) => {

    const product = getProduct(id)


    if (!product) {
        throw new Error(`Product with id ${id} not found`)
    }

    return toProductDTO(product)
}


class ProductDTO {
    id: string;
    name: string;
    price: number;

    constructor(id: string, name: string, price: number) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}

function toProductDTO(product: Product): ProductDTO {
    return new ProductDTO(product.id, product.name, product.price);
}
