import { Schema, model } from 'mongoose';
import { Bike } from './bike.interface';

//Schima

const bikeSchema = new Schema<Bike>({
  name: { type: String, required: true },
  brand: { type: String, required: true },
  price: {
    type: Number,
    min: [0, 'Price must be positive number'],
    required: true,
  },
  category: {
    type: String,
    enum: { values: ['Mountain', 'Road', 'Hybrid', 'Electric'] },
    required: true,
  },
  description: { type: String, required: true },
  quantity: { type: Number, required: true },
  inStock: { type: Boolean, required: true },
});

// 3. Create a Model.
export const BikeModel = model<Bike>('Bike', bikeSchema);
