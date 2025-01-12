import { Request, Response } from 'express';
import CartModel from '../models/cart.model';
import CartService from '../services/cart.service';

const cartService = new CartService(new CartModel());

export const addItem = (req: Request, res: Response) => {
    const { productId, quantity } = req.body;
    cartService.addItemToCart(productId, quantity);
    res.status(201).json({ message: 'Item added to cart' });
};

export const listCart = (req: Request, res: Response) => {
    const items = cartService.getCartItems();
    res.json(items);
};