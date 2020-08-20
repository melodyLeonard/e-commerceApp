import express from 'express'
import path from 'path'
import cors from 'cors'
import data from './data'
import config from './config'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import userRoute from './routes/userRoute'
import productRoute from './routes/productRoute'
import orderRoute from './routes/orderRoute';
import uploadRoute from './routes/uploadRoute';

dotenv.config()

const mongodbUrl = config.MONGODB_URL

const app = express()
app.use(express.json())
app.use(cors())

app.use("/api/users", userRoute)

app.use("/api/products", productRoute)

// app.use('/api/uploads', uploadRoute);
// app.use('/api/orders', orderRoute);
// app.get('/api/config/paypal', (req, res) => {
//     res.send(config.PAYPAL_CLIENT_ID);
// });
// app.use('/uploads', express.static(path.join(__dirname, '/../uploads')));
// app.use(express.static(path.join(__dirname, '/../frontend/build')));
// app.get('*', (req, res) => {
//     res.sendFile(path.join(`${__dirname}/../frontend/build/index.html`));
// });


mongoose.connect(mongodbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
}).catch(error => console.log(error.reason))


const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
    console.log(` Server runing on port ${PORT}`)
})