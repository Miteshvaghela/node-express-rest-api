import express from 'express';
import mongoose, { mongo } from 'mongoose';

const ProductSchema = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    category : {
        type : String,
        required : true
    },
    price : {
        type : Number,
        required : true,
        default : 0
    },
    quantity : {
        type : Number,
        required : true,
        default : 0
    }
},
{
    timestamps : true
})


const ProductModel = mongoose.model('Product', ProductSchema);

export default ProductModel;