import {Cart} from "../models/cart.model";

const carts: Cart[] = []


const addCart = (cart: Cart) => {
    carts.push(cart)
}

const getCart = (id: string): Cart | null => {
    return carts.find(cart => cart.id === id) || null
}

export {
    getCart,
    addCart
}