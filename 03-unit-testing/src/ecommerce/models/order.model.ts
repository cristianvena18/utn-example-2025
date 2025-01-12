import { IOrder } from '../interfaces/order';

export default class OrderModel {
    private orders: IOrder[] = [];

    add(order: IOrder): void {
        this.orders.push(order);
    }

    getAll(): IOrder[] {
        return this.orders;
    }
}