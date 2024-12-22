import { useState, useEffect } from 'react';
import { SalesOrder } from '../types/sales';
import { salesService } from '../services/salesService';

export const useSalesOrders = () => {
  const [orders, setOrders] = useState<SalesOrder[]>([]);
  const [summary, setSummary] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const ordersData = await salesService.getSalesOrders();
        setOrders(ordersData);
        
        // Calculate summary
        const totalOrders = ordersData.length;
        const totalRevenue = ordersData.reduce((sum, order) => sum + order.totals.total, 0);
        const averageOrderValue = totalRevenue / totalOrders;

        setSummary({
          totalOrders,
          totalRevenue,
          averageOrderValue,
          period: new Date().toISOString().slice(0, 7) // YYYY-MM
        });
      } catch (error) {
        console.error('Error fetching sales orders:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return {
    orders,
    summary,
    loading
  };
};