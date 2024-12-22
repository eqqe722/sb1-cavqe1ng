export interface BaseEntity {
  id: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface User extends BaseEntity {
  username: string;
  email: string;
  role: 'admin' | 'user' | 'manager';
  firstName: string;
  lastName: string;
}

export interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
}