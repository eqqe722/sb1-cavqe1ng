import { BaseEntity, LocalizedContent, Status } from './common';

export interface Organization extends BaseEntity {
  name: LocalizedContent;
  code: string;
  type: 'headquarters' | 'branch' | 'department' | 'unit';
  parentId?: string;
  status: Status;
  address: Address;
  contact: ContactInfo;
}

export interface Address {
  street: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  coordinates?: {
    latitude: number;
    longitude: number;
  };
}

export interface ContactInfo {
  email: string;
  phone: string;
  fax?: string;
  website?: string;
}