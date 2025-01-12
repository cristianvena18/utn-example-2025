import { Request, Response } from 'express';
import ProductModel from '../models/product.model';
import ProductService from '../services/product.service';

const productService = new ProductService(new ProductModel());

export const createProduct = (req: Request, res: Response) => {
    const { name, price } = req.body;
    const product = productService.addProduct(name, price);
    res.status(201).json(product);
};

export const listProducts = (req: Request, res: Response) => {
    const products = productService.getProducts();
    res.json(products);
};