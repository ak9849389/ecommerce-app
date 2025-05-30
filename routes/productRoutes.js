// File: routes/productRoutes.js
import express from 'express';
import Product from '../models/Product.js';
import { getAll, getById, create } from '../controllers/productController.js';

const router = express.Router();
router.get('/', getAll);
router.get('/:id', getById);
router.post('/', create);


router.get('/api/products', async (req, res) => {
    try {
      const products = await Product.find();
      res.json(products);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
  
  export default router;