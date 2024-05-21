import mongoose from 'mongoose';

const OrderSchema = mongoose.Schema({

    customerName : {
        type : String,
        required : true,
    },
    customerEmail : {
        type : String,
        required : true,
    },
    price : {
        type : Number,
        required : true,
    },
    status : {
        type : String,
        required : true,
    },
    delivered : {
        type : Boolean,
        required : true,
    }

}, {
    timestamps : true
});

const OrderModel = mongoose.model('Order', OrderSchema);

export default OrderModel;
