import express from 'express';
import ProductController from '../controllers/product.controller.js';
const Router = express.Router();

Router.get('/', ProductController.getAllProducts);
Router.get('/:id', ProductController.getSingleProduct);
Router.post('/', ProductController.addProduct);
Router.delete('/:id', ProductController.deleteProduct);
Router.put('/:id', ProductController.updateProduct);


export default Router;