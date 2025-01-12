import {Product} from "../models/product.model";

const products: Product[] = []


const addProduct = (product: Product) => {
    products.push(product)
}

const getProduct = (id: string): Product | null => {
    return products.find(product => product.id === id) || null
}


export {
    getProduct,
    addProduct
}