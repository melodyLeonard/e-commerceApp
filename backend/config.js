export default {
    MONGODB_URL: process.env.MONGODB_URL || 'mongodb://localhost/shoppify',
    JWT_SECRET: process.env.JWT_SECRET || 'somesecretkey',
    PAYPAL_CLIENT_ID: process.env.PAYPAL_CLIENT_ID || 'somebody',
    accessKeyId: process.env.accessKeyId || 'accessKeyKeyId',
    secretAccessKey: process.env.secretAccessKey || 'secretAccessKeyId',
}