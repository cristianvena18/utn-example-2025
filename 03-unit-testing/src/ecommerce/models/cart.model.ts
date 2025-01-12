import { ICart, ICartItem } from '../interfaces/cart';

export default class CartModel {
    private cart: ICart = { items: [] };

    addItem(item: ICartItem): void {
        this.cart.items.push(item);
    }

    getItems(): ICartItem[] {
        return this.cart.items;
    }

    removeItem(productId: string): void {
        this.cart.items = this.cart.items.filter((item) => item.productId !== productId);
    }
}