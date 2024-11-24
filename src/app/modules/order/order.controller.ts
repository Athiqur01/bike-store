import { Request, Response } from 'express';
import { orderService } from './order.service';

//create order
const createOrder = async (req: Request, res: Response) => {
  try {
    const order = req.body;

    const result = await orderService.orderCreateToDb(order);
    res.status(400).json({
      message: 'Order created successfully',
      success: true,
      data: result,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Validation failed',
      success: false,
      error: error,
    });
  }
};
//revenue calculation
const calculateRevenue = async (req: Request, res: Response) => {
  try {
    const result = await orderService.calculateRevenueUsingRef();

    res.status(400).json({
      message: 'Revenue calculated successfully',
      status: true,
      data: {
        totalRevenue: result,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export const orderController = {
  createOrder,
  calculateRevenue,
};
