import OrderModel from '../models/order.model';
import { IOrder } from '../interfaces/order';
import { ICartItem } from '../interfaces/cart';
import IDGenerator from '../../shared/utils/id.generator';

export default class OrderService {
    constructor(private orderModel: OrderModel) {}

    createOrder(cartItems: ICartItem[], totalPrice: number): IOrder {
        const order: IOrder = { id: IDGenerator.generate(), products: cartItems, totalPrice };
        this.orderModel.add(order);
        return order;
    }

    getOrders(): IOrder[] {
        return this.orderModel.getAll();
    }
}