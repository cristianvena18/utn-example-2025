import {Cart} from "../models/cart.model";
import {addCart, getCart} from "../database/cart";

const createCartService = (userId: string) => {

    const cart = new Cart(userId)

    addCart(cart)
}


const getCartService = (id: string) => {

    const cart = getCart(id)

    if (!cart) {
        throw new Error('Cart not found')
    }

    return cart;
}