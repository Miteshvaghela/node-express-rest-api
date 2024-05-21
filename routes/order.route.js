import express from 'express';
import OrderController from '../controllers/order.controller.js';
const Router = express.Router();

Router.get('/', OrderController.getAllOrders);
Router.get('/:id', OrderController.getSingleOrder);
Router.post('/', OrderController.createOrder);
Router.put('/:id', OrderController.updateOrder);
Router.delete('/:id', OrderController.deleteOrder);


export default Router;