import { ApiResponse } from '../types/common';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

export async function fetchApi<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<ApiResponse<T>> {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
  });

  const data = await response.json();
  return {
    data,
    status: response.status,
    message: response.statusText,
  };
}