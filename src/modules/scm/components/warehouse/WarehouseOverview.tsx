import React from 'react';
import { Card } from '../../../../components/common/Card';
import { Warehouse } from '../../types/warehouse';
import { formatNumber } from '../../../../utils/formatters';
import { Package, Truck } from 'lucide-react';

interface WarehouseOverviewProps {
  warehouse: Warehouse;
}

export default function WarehouseOverview({ warehouse }: WarehouseOverviewProps) {
  const calculateOccupancy = () => {
    return (warehouse.capacity.used / warehouse.capacity.total) * 100;
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card
          title="معلومات المستودع"
          subtitle={warehouse.name.ar}
          icon={Package}
        >
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500">السعة الكلية</p>
                <p className="text-lg font-semibold">
                  {formatNumber(warehouse.capacity.total)} {warehouse.capacity.unit}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500">السعة المستخدمة</p>
                <p className="text-lg font-semibold">
                  {formatNumber(warehouse.capacity.used)} {warehouse.capacity.unit}
                </p>
              </div>
            </div>

            <div>
              <p className="text-sm text-gray-500 mb-1">نسبة الإشغال</p>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-600 rounded-full h-2"
                  style={{ width: `${calculateOccupancy()}%` }}
                />
              </div>
            </div>
          </div>
        </Card>

        <Card
          title="المناطق التخزينية"
          subtitle="توزيع المساحات التخزينية"
          icon={Truck}
        >
          <div className="space-y-4">
            {warehouse.zones.map((zone) => (
              <div key={zone.id} className="flex items-center justify-between">
                <div>
                  <p className="font-medium">{zone.name}</p>
                  <p className="text-sm text-gray-500">{zone.type}</p>
                </div>
                <div className="text-right">
                  <p className="font-medium">
                    {formatNumber(zone.occupancy)}/{formatNumber(zone.capacity)}
                  </p>
                  <p className="text-sm text-gray-500">
                    {((zone.occupancy / zone.capacity) * 100).toFixed(1)}% مشغول
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}