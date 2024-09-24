import express from 'express'
import Product from '../model/productModel.js';

const router = express.Router();

router.post('/create-product', async (req, res) => {
    const { title, description, price, category, image, quantity } = req.body;

    try {
        const newProduct = new Product({
            title,
            description,
            price,
            category,
            image,
            quantity
        });

        const savedProduct = await newProduct.save();
        res.status(201).json(savedProduct);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

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
router.get('/category/:category', async (req, res) => {
    try {
        const products = await Product.find({ category: req.params.category });
        res.json(products);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

export default router;