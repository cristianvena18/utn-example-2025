import { Router } from 'express';
import { addItem, listCart } from '../controllers/cart.controller';

const router = Router();
router.post('/', addItem);
router.get('/', listCart);

export default router;