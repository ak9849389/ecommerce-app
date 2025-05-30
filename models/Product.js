// # Product schema

// File: models/Product.js
import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  description: String,
  image:[String],
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Product', productSchema);
