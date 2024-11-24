import express from 'express';
import { orderController } from './order.controller';

const route = express.Router();

route.post('/orders', orderController.createOrder);
route.get('/orders/revenue', orderController.calculateRevenue);

export const orderRoute = route;
