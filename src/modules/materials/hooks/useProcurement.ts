import { useState, useEffect } from 'react';
import { PurchaseRequisition, PurchaseOrder } from '../types/materials';
import { materialsService } from '../services/materialsService';

export const useProcurement = () => {
  const [requisitions, setRequisitions] = useState<PurchaseRequisition[]>([]);
  const [orders, setOrders] = useState<PurchaseOrder[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [requisitionsData, ordersData] = await Promise.all([
          materialsService.getRequisitions(),
          materialsService.getPurchaseOrders()
        ]);
        
        setRequisitions(requisitionsData);
        setOrders(ordersData);
      } catch (error) {
        console.error('Error fetching procurement data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return {
    requisitions,
    orders,
    loading
  };
};