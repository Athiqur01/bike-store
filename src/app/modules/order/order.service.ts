import { Bike } from '../bike/bike.interface';
import { BikeModel } from '../bike/bike.model';
import { Order } from './order.interface';
import { orderModel } from './order.model';
import { ObjectId } from 'mongodb';

//Create order with update inventory stock
const orderCreateToDb = async (order: Order) => {
  const productId = order.product;
  const orderQuantity = order.quantity;
  const bikeData = (await BikeModel.findOne({
    _id: new ObjectId(productId),
  })) as Bike;

  // Check if there is enough stock
  const quantityDiff = bikeData.quantity - orderQuantity;
  if (quantityDiff < 0) {
    throw new Error('Insufficient stock for the requested quantity');
  }

  // Update the stock in a single operation
  const updatedBike = await BikeModel.findByIdAndUpdate(
    productId,
    { $set: { quantity: quantityDiff, inStock: quantityDiff > 0 } },
    { new: true },
  );
  if (!updatedBike) {
    throw new Error('Failed to update product quantity');
  }

  console.log('Updated Bike:', updatedBike);

  const result = orderModel.create(order);
  return result;
};

//Calculate total revenue using aggregation
const calculateRevenueUsingRef = async () => {
  const result = await orderModel.aggregate([
    //stage-1
    {
      $lookup: {
        from: 'bikes',
        localField: 'product',
        foreignField: '_id',
        as: 'bikeDetails',
      },
    },
    //stage-2
    {
      $unwind: '$bikeDetails',
    },
    //stage-3:  revenue per order calculation
    {
      $project: {
        revenueEachOrder: { $multiply: ['$quantity', '$bikeDetails.price'] },
      },
    },
    //stage-4:
    {
      $group: {
        _id: null,
        totalRevenue: { $sum: '$revenueEachOrder' },
      },
    },
  ]);
  const totalRevenue = result[0]?.totalRevenue || 0;

  return totalRevenue;
};

export const orderService = {
  orderCreateToDb,
  calculateRevenueUsingRef,
};
