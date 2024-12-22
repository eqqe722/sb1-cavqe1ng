import { useState, useEffect } from 'react';
import { CostCenter, CostAllocation } from '../types/costCenter';
import { controllingService } from '../services/controllingService';

export const useCostCenters = () => {
  const [costCenters, setCostCenters] = useState<CostCenter[]>([]);
  const [allocations, setAllocations] = useState<CostAllocation[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [centersData, allocationsData] = await Promise.all([
          controllingService.getCostCenters(),
          controllingService.getCostAllocations()
        ]);
        
        setCostCenters(centersData);
        setAllocations(allocationsData);
      } catch (error) {
        console.error('Error fetching cost center data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return {
    costCenters,
    allocations,
    loading
  };
};