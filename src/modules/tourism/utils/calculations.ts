```typescript
import { PilgrimagePackage, GroupBooking } from '../types';

export const calculatePackageOccupancy = (
  package: PilgrimagePackage
): number => {
  const booked = package.capacity.maximum - package.capacity.available;
  return (booked / package.capacity.maximum) * 100;
};

export const calculateTotalRevenue = (
  bookings: GroupBooking[],
  packagePrice: number
): number => {
  return bookings.reduce((total, booking) => {
    return total + (booking.pilgrims.length * packagePrice);
  }, 0);
};

export const calculateRoomAllocation = (
  totalPilgrims: number,
  roomTypes: { type: string; capacity: number; count: number }[]
): Record<string, number> => {
  const allocation: Record<string, number> = {};
  let remainingPilgrims = totalPilgrims;

  roomTypes.forEach(room => {
    const roomsNeeded = Math.ceil(remainingPilgrims / room.capacity);
    allocation[room.type] = Math.min(roomsNeeded, room.count);
    remainingPilgrims -= allocation[room.type] * room.capacity;
  });

  return allocation;
};

export const calculateTransportCapacity = (
  groupSize: number,
  vehicleCapacity: number
): number => {
  return Math.ceil(groupSize / vehicleCapacity);
};
```