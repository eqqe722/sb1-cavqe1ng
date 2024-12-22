import { useState, useEffect } from 'react';
import { PriceList, DiscountRule } from '../types/pricing';
import { salesService } from '../services/salesService';

export const usePricing = () => {
  const [prices, setPrices] = useState<PriceList[]>([]);
  const [discounts, setDiscounts] = useState<DiscountRule[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [pricesData, discountsData] = await Promise.all([
          salesService.getPriceLists(),
          salesService.getDiscountRules()
        ]);
        
        setPrices(pricesData);
        setDiscounts(discountsData);
      } catch (error) {
        console.error('Error fetching pricing data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return {
    prices,
    discounts,
    loading
  };
};