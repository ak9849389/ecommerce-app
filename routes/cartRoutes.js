// File: routes/cartRoutes.js
import express from 'express';
import { getCart, addToCart } from '../controllers/cartController.js';

const router = express.Router();
router.get('/:userId', getCart);
router.post('/add', addToCart);
export default router;