/* eslint-disable no-unused-vars */

import { customDateFormat } from '../../../helpers/customDateFormat';
import { generateId } from '../../../helpers/generateId';
import { IOrder } from './order.interface';
import { Order } from './order.model';

const createOrder = async (payload: IOrder): Promise<IOrder> => {
  const date = new Date();
  const formattedDate = customDateFormat(date);
  const generateID = await generateId(Order, 'O', 'orderId');
  console.log('🚀 ~ createOrder ~ generateID:', generateID);

  const productRequestPayload = {
    ...payload,
    orderId: generateID,
    orderDate: formattedDate,
  };
  const result = await Order.create(productRequestPayload);
  return result;
};

const getAllOrders = async (userId: string) => {
  const orders = await Order.find({ userId }).lean();
  return orders;
};

const getAllOrdersForAdmin = async () => {
  const res = await Order.find({}).lean();
  return res;
};

const getSingleOrder = async (id: string) => {
  const result = await Order.findOne({ orderId: id })
    .populate('orderedItems')
    .populate('userId');
  return result;
};

const deleteOrder = async (id: string) => {
  const result = await Order.findByIdAndDelete(id);
  return result;
};

export const OrderService = {
  createOrder,
  deleteOrder,
  getAllOrders,
  getSingleOrder,
  getAllOrdersForAdmin,
};
