const Product = require('../models/product');

// Controller for creating a new product
exports.createProduct = async (req, res) => {
    try {
        const { name, description, price } = req.body;

        const product = new Product({
            name,
            description,
            price
        });

        const savedProduct = await product.save();
        res.status(201).json(savedProduct);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create product' });
    }
};

// Controller for getting all products
exports.getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: 'Failed to get products' });
    }
};

// Controller for getting a product by its ID
exports.getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }
        res.json(product);
    } catch (error) {
        res.status(500).json({ error: 'Failed to get product' });
    }
};

// Controller for updating a product by its ID
exports.updateProductById = async (req, res) => {
    try {
        const { name, description, price } = req.body;

        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }

        product.name = name;
        product.description = description;
        product.price = price;

        const updatedProduct = await product.save();
        res.json(updatedProduct);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update product' });
    }
};

// Controller for deleting a product by its ID
exports.deleteProductById = async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }
        res.json({ message: 'Product deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete product' });
    }
};
