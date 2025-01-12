import CartModel from '../models/cart.model';
import { ICartItem } from '../interfaces/cart';

export default class CartService {
    constructor(private cartModel: CartModel) {}

    addItemToCart(productId: string, quantity: number): void {
        const item: ICartItem = { productId, quantity };
        this.cartModel.addItem(item);
    }

    getCartItems(): ICartItem[] {
        return this.cartModel.getItems();
    }
}