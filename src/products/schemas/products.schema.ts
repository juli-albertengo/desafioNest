/* eslint-disable prettier/prettier */
import * as mongoose from 'mongoose';

export const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true, max: 50 },
  category: { type: String, required: true },
  description: { type: String, required: true },
  foto: { type: String, required: true, max: 50 },
  price: { type: Number, required: true },
});
