import {ICartItem} from "./cart";

export interface IOrder {
    id: string;
    products: ICartItem[];
    totalPrice: number;
}