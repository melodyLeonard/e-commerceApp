import express from 'express'
import cors from 'cors'
import data from './data'
import config from './config'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import userRoute from './routes/userRoute'
import productRoute from './routes/productRoute'
dotenv.config()

const mongodbUrl = config.MONGODB_URL

const app = express()
app.use(express.json())
app.use(cors())

app.use("/api/users", userRoute)

app.use("/api/products", productRoute)


mongoose.connect(mongodbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
}).catch(error => console.log(error.reason))

const PORT = process.env.PORT || 4000




// app.get('/api/products/:id', (req, res) => {
//     const productId = req.params.id

//     const product = data.products.find(x => x.id == productId)

//     if (product) {
//         return res.json(product)
//     } else {
//         return res.status(404).json({ msg: "Product not found" })
//     }
// })

app.listen(PORT, () => {
    console.log(` Server runing on port ${PORT}`)
})