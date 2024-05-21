import express from 'express';
import mongoose from 'mongoose';
import ProductRoute from './routes/product.route.js';
const port = process.env.PORT || 9000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/api/products', ProductRoute);



mongoose.connect(process.env.MONGO_URL)
.then(() => {
    console.log('Connected to database');
    
    app.listen(port, () => {
        console.log(`Application is running on ${port}`);
    })
})