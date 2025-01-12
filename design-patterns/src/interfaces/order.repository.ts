import {Order} from "../models/order.model";

export interface OrderRepository {
    getById(orderId: number): Order | null;
    save(order: Order): void;
}