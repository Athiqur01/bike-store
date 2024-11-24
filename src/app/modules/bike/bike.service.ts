import { BikeModel } from './bike.model';
import { Bike } from './bike.interface';
import { ObjectId } from 'mongodb';

const bikeCreateToDb = async (bike: Bike) => {
  const result = await BikeModel.create(bike);
  return result;
};

const getAllBikeFromDb = async () => {
  const result = await BikeModel.find();
  return result;
};
const getSingleBikeFromDb = async (productId: string) => {
  const result = await BikeModel.findOne({ _id: new ObjectId(productId) });
  //console.log(result)
  return result;
};
//update price and amount
const updateBikePriceandQuantity = async (id: string, bike: Bike) => {
  const result = await BikeModel.findByIdAndUpdate(id, bike, { new: true });
  return result;
};
//Delete Bike
const deleteBikeFromDb = async (id: string) => {
  const result = await BikeModel.findByIdAndDelete(id);
  return result;
};

export const bikeServices = {
  bikeCreateToDb,
  getAllBikeFromDb,
  getSingleBikeFromDb,
  updateBikePriceandQuantity,
  deleteBikeFromDb,
};
