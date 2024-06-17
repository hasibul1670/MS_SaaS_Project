import express from 'express';
import { OrderController } from './order.controller';


const router = express.Router();

router.post('/create-order', OrderController.createOrder);
router.get('/all-orders', OrderController.getAllOrdersForAdmin);
router.get('/:id', OrderController.getSingleOrder);
router.get('/all-order-user/:id', OrderController.getAllOrders);
router.delete('/:id', OrderController.deleteOrder);
router.patch('/:id', OrderController.deleteOrder);

export const OrderRoutes = router;
