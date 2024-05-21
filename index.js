import express from 'express';
import mongoose from 'mongoose';
import ProductModel from './models/products.model.js'
const port = process.env.PORT || 9000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

// fetch all products 
app.get('/api/products', async (req, res) => { 
    try{
        const products = await ProductModel.find({});
        if(products){
            return res.status(200).json(products);
        }
        return res.status(404).json({message : 'No products available'});
    }catch(err){
        return res.status(500).json({message : err.message});
    }

})


// create a product 

app.post('/api/products', async (req, res) => { 
    try{ 
        const product = await ProductModel.create(req.body);
        if(product){
            return res.status(200).json(product);
        }
        return res.status(201).json({message : 'Could not create a product'});

    }catch(err){
        return res.status(500).json({message : err.message});
    }
})

// get a single product 

app.get('/api/products/:id', async (req, res) => {
    try{

        const { id } = req.params;
        
        if(!id) 
            return res.status(500).send({message : 'Could not find a product'});
        
        const product = await ProductModel.find({_id:id});

        if(!product){
            return res.status(404).send({message : 'Could not find a product'});
        }

        return res.status(200).send(product);


    }catch(err){
        return res.status(500).send({message : err.message});
    }
})


// delete a product 

app.delete('/api/products/:id', async (req, res) => {
    try{
        const { id } = req.params;

        if(!id) return res.status(201).send({message: 'Could not find a product'});

        const deletePrdouct = await ProductModel.findByIdAndDelete(id);
        if(!deletePrdouct){
            return  res.status(201).send({message: 'Could not find a product'});
        }

        return res.status(200).send({message: 'Product deleted successfully'});

    }catch(err){
        return res.status(500).send({message: err.message});
    }
})


// update a product 

app.put('/api/products/:id', async (req, res) => {
    try{
        const { id } = req.params; 

        if(!id)
            return res.status(201).send({message : 'Could not find a product'});

        const updateProduct = await ProductModel.findByIdAndUpdate(id, req.body);
        console.log(id);
        if(updateProduct){
            const product = await ProductModel.find({_id:id});
            return res.status(200).send(product);
        }

        return res.status(401).send({message : 'Could not update a product'});

    }catch(err){
        return res.status(500).send({message : err.messaage});
    }
})



mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log('Connected to database');
        
        app.listen(port, () => {
            console.log(`Application is running on ${port}`);
        })
    })