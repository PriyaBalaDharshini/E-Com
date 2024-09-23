import express from 'express'
import Product from '../model/productModel';

const router = express.Router();

//all products
router.get("/", async (req, res) => {
    try {
        const allProducts = await Product.find();
        res.status(200).json(allProducts);
    } catch (error) {
        res.status(500).json({ message: err.message });
    }
})

// products by category
router.get('/:category', async (req, res) => {
    try {
        const products = await Product.find({ category: req.params.category });
        res.status(200).json(products);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

export default router;