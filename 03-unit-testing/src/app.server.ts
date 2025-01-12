import express from 'express';

import cartRoutes from './ecommerce/routes/cart.router';
import productRoutes from './products/routes/product.router';
import orderRoutes from './ecommerce/routes/order.router';

const app = express();
app.use(express.json());
app.use('/products', productRoutes);
app.use('/cart', cartRoutes);
app.use('/orders', orderRoutes);

export default app;