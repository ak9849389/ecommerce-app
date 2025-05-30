// # Product CRUD logic

// File: controllers/productController.js
import Product from '../models/Product.js';

export const getAll = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};

export const getById = async (req, res) => {
  const product = await Product.findById(req.params.id);
  res.json(product);
};

export const create = async (req, res) => {
  const product = new Product(req.body);
  await product.save();
  res.status(201).json(product);
};