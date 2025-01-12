import {OrderRepository} from "../interfaces/order.repository";
import {Order} from "../models/order.model";


class InMemoryOrderRepository implements OrderRepository {
    private orders: Order[];
    constructor(
    ) {
        this.orders = []
    }

    getById(orderId: number): Order | null {
        return this.orders.find(order => order.id === orderId) || null;
    }
    save(order: Order): void {
        this.orders.push(order);
    }

}

export default new InMemoryOrderRepository()