import express from 'express';
import { bikeController } from './bike.controller';

const route = express.Router();

// it will call controller function
route.post('/products', bikeController.createBike);
route.get('/products', bikeController.getAllBike);
route.get('/products/:productId', bikeController.getSingleBike);
route.put('/products/:productId', bikeController.updateBike);
route.delete('/products/:productId', bikeController.deleteBike);

export const bikeRoute = route;
