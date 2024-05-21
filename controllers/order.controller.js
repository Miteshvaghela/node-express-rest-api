import OrderModel from '../models/orders.model.js';

const getAllOrders = async (req, res) => {

    try{ 
        const orders = await OrderModel.find({});
        if(orders){
            return res.status(200).json(orders);
        }
        return res.status(404).json({message : 'No orders available'});
    }catch(err){
        return res.status(500).json({message : err.message});
    }

}

const getSingleOrder = async (req, res) => {

    try{
        const {id} = req.params;
        const order = await OrderModel.find({_id:id});
        if(order){
            return res.status(200).json(order);
        }
        return res.status(404).json({message : 'No order available'});
    }catch(err){
        return res.status(500).json({message : err.message});
    }
    
}

const createOrder = async (req, res) => {

    try{
        const order = await OrderModel.create(req.body);
        if(order){
            return res.status(200).json(order);
        }
        return res.status(404).json({message : 'Could not create an order.'});
    }catch(err){
        return res.status(500).json({message : err.message});
    }
    
}

const updateOrder = async (req, res) => {

    try{
        const {id} = req.params; 
        const order = await OrderModel.findByIdAndUpdate(id, req.body);
        if(order){

            const updatedOrder = await OrderModel.find({_id:id});
            return res.status(200).json(updatedOrder);
        }
        return res.status(404).json({message : 'Could not update the order.'});
    }catch(err){
        return res.status(500).json({message : err.message});
    }
    
}

const deleteOrder = async (req, res) => {

    try{
        const {id} = req.params;
        const order = await OrderModel.findByIdAndDelete(id);
        if(order){
            return res.status(200).json({message : 'Order deleted successfully.'});
        }
        return res.status(404).json({message : 'No order available'});
    }catch(err){
        return res.status(500).json({message : err.message});
    }
    
}



export default {
    getAllOrders,
    getSingleOrder,
    createOrder,
    updateOrder,
    deleteOrder
}