import { Request, Response } from 'express';
import { bikeServices } from './bike.service';
//import { z } from "zod"

const createBike = async (req: Request, res: Response) => {
  try {
    //schema validation using zod
    // const bikeValidationSchema=z.object({
    //    name=z.string(),
    // })

    const bike = req.body;
    //will call service function
    const result = await bikeServices.bikeCreateToDb(bike);
    //send data
    res.status(400).json({
      message: 'Bike created successfully',
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

//get all bike
const getAllBike = async (req: Request, res: Response) => {
  const result = await bikeServices.getAllBikeFromDb();
  try {
    res.status(400).json({
      message: 'Bikes retrieved successfully',
      success: true,
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};
//get single bike
const getSingleBike = async (req: Request, res: Response) => {
  const { productId } = req.params;
  const result = await bikeServices.getSingleBikeFromDb(productId);
  try {
    res.status(400).json({
      message: 'Bikes retrieved successfully',
      success: true,
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};
//update  bike data
const updateBike = async (req: Request, res: Response) => {
  const { productId } = req.params;
  const body = req.body;
  const result = await bikeServices.updateBikePriceandQuantity(productId, body);
  try {
    res.status(400).json({
      message: 'Bike updated successfully"',
      success: true,
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};
//Delete bike
const deleteBike = async (req: Request, res: Response) => {
  const { productId } = req.params;
  const result = await bikeServices.deleteBikeFromDb(productId);
  try {
    res.status(400).json({
      message: 'Bike deleted successfully',
      success: true,
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

export const bikeController = {
  createBike,
  getAllBike,
  getSingleBike,
  updateBike,
  deleteBike,
};
