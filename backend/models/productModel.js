import mongoose from 'mongoose'

const reviewSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        rating: { type: Number, default: 0 },
        comment: { type: String, required: true },
    },
    {
        timestamps: true,
    }
);

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    brand: {
        type: String,
        require: true,
    },
    price: {
        type: Number,
        require: true,
        default: 0,
    },
    category: {
        type: String,
        require: true,
    },
    countInStock: {
        type: Number,
        require: true,
        default: 0,
    },
    description: {
        type: String,
        require: true,
    },
    rating: {
        type: Number,
        default: 0,
        require: true,
    },
    numReviews: {
        type: Number,
        default: 0,
        require: true,
    },
    reviews: [reviewSchema]

})

const productModel = mongoose.model("Product", productSchema)

export default productModel