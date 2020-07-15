import express from 'express'
import cors from 'cors'

import { data } from './data'

const app = express()

app.use(express.json())
app.use(cors())

const PORT = process.env.PORT || 4000

app.get('/api/products', (req, res) => {
    return res.json(data.products)
})

app.get('/api/products/:id', (req, res) => {
    const productId = req.params.id
    const product = data.products.find(p => p.id == productId)
    if (product) {
        return res.json(product)
    } else {
        return res.status(404).json({ msg: "Product not found" })
    }
})

app.listen(PORT, () => {
    console.log(` Server runing on port ${PORT}`)
})