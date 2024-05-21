import ProductModel from '../models/products.model.js';

const getAllProducts =  async (req, res) => {

    try{
        const products = await ProductModel.find({});
        if(products){
            return res.status(200).json(products);
        }
        return res.status(404).json({message : 'No products available'});
    }catch(err){
        return res.status(500).json({message : err.message});
    }

}

const getSingleProduct = async (req, res) => {

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

}

const addProduct = async (req, res) => {

    try{ 
        const product = await ProductModel.create(req.body);
        if(product){
            return res.status(200).json(product);
        }
        return res.status(201).json({message : 'Could not create a product'});

    }catch(err){
        return res.status(500).json({message : err.message});
    }

}

const updateProduct = async (req, res) => {

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

}

const deleteProduct = async (req, res) => {

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



}


export default {
    getAllProducts,
    getSingleProduct,
    addProduct,
    updateProduct,
    deleteProduct
}