import express from 'express'
import Product from '../models/productModel'
import { getToken, isAdmin, isAuth } from '../utils';

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const category = req.query.category ? { category: req.query.category } : {};
        const searchKeyword = req.query.searchKeyword
            ? {
                name: {
                    $regex: req.query.searchKeyword,
                    $options: 'i',
                },
            }
            : {};
        const sortOrder = req.query.sortOrder
            ? req.query.sortOrder === 'lowest'
                ? { price: 1 }
                : { price: -1 }
            : { _id: -1 };
        const products = await Product.find({ ...category, ...searchKeyword }).sort(
            sortOrder
        );
        res.json(products)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})


router.get('/:id', async (req, res) => {
    try {
        const productId = req.params.id
        const product = await Product.findById(productId)
        if (product) {
            res.json(product)
        } else {
            res.status(404).json({ message: "product not found" })
        }
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
})


router.post('/', isAuth, isAdmin, async (req, res) => {
    const product = new Product({
        name: req.body.name,
        price: req.body.price,
        image: req.body.image,
        brand: req.body.brand,
        category: req.body.category,
        countInStock: req.body.countInStock,
        description: req.body.description,
    })

    const newProduct = await product.save()
    if (newProduct) {
        return res.status(201).json({ message: 'Product created successfully', data: newProduct })
    }

    return res.status(500).json({ message: 'Error while creating product' })
})


router.post('/:id/reviews', isAuth, async (req, res) => {
    const productId = req.params.id
    const product = await Product.findById(productId);
    if (product) {
        const review = {
            name: req.body.name,
            rating: Number(req.body.rating),
            comment: req.body.comment,
        };
        product.reviews.push(review);
        product.numReviews = product.reviews.length;
        product.rating =
            product.reviews.reduce((a, c) => c.rating + a, 0) /
            product.reviews.length;
        const updatedProduct = await product.save();
        res.status(201).json({
            data: updatedProduct.reviews[updatedProduct.reviews.length - 1],
            message: 'Review saved successfully.',
        });
    } else {
        res.status(404).json({ message: 'Product Not Found' });
    }
});



router.put('/:id', isAuth, isAdmin, async (req, res) => {
    const productId = req.params.id
    const product = await Product.findById(productId)

    if (product) {
        product.name = req.body.name
        product.price = req.body.price
        product.image = req.body.image
        product.brand = req.body.brand
        product.category = req.body.category
        product.countInStock = req.body.countInStock
        product.description = req.body.description

        const updatedProduct = await product.save()
        if (updatedProduct) {
            return res.status(200).json({ message: 'Product updated successfully', data: updatedProduct })
        }
    }
    return res.status(500).json({ message: 'Error while updating product' })

})

router.delete('/:id', isAuth, isAdmin, async (req, res) => {
    try {
        const productId = req.params.id
        const productToDelete = await Product.findById(productId)

        if (productToDelete) {
            await productToDelete.remove()
            return res.status().json({ message: "Product Deleted successfully" })
        }
    } catch (error) {
        return res.status(500).json({ message: 'Error while deleting product' })

    }
})

export default router