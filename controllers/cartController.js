// # Cart logic

// File: controllers/cartController.js
import Cart from '../models/Cart.js';

export const getCart = async (req, res) => {
  const cart = await Cart.findOne({ userId: req.params.userId });
  res.json(cart || { userId: req.params.userId, products: [] });
};

export const addToCart = async (req, res) => {
  let cart = await Cart.findOne({ userId: req.body.userId });
  if (!cart) cart = new Cart({ userId: req.body.userId, products: [] });
  cart.products.push({ productId: req.body.productId, quantity: req.body.quantity });
  await cart.save();
  res.json(cart);
};
