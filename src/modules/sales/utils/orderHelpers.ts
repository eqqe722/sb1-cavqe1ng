import { OrderStatus, PaymentStatus } from '../types/sales';

export const getOrderStatusColor = (status: OrderStatus): string => {
  const colors = {
    draft: 'bg-gray-100 text-gray-800',
    confirmed: 'bg-blue-100 text-blue-800',
    processing: 'bg-yellow-100 text-yellow-800',
    shipped: 'bg-purple-100 text-purple-800',
    delivered: 'bg-green-100 text-green-800',
    cancelled: 'bg-red-100 text-red-800'
  };
  return colors[status];
};

export const getPaymentStatusColor = (status: PaymentStatus): string => {
  const colors = {
    pending: 'bg-yellow-100 text-yellow-800',
    partial: 'bg-blue-100 text-blue-800',
    paid: 'bg-green-100 text-green-800',
    refunded: 'bg-red-100 text-red-800'
  };
  return colors[status];
};

export const calculateOrderTotal = (
  subtotal: number,
  discount: number,
  tax: number,
  shipping: number
): number => {
  return subtotal - discount + tax + shipping;
};