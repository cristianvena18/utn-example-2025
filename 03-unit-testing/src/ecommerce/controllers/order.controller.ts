import { Request, Response } from 'express';
import OrderModel from '../models/order.model';
import OrderService from '../services/order.service';

const orderService = new OrderService(new OrderModel());

export const createOrder = (req: Request, res: Response) => {
    const { cartItems, totalPrice } = req.body;
    const order = orderService.createOrder(cartItems, totalPrice);
    res.status(201).json(order);
};

export const listOrders = (req: Request, res: Response) => {
    const orders = orderService.getOrders();
    res.json(orders);
};