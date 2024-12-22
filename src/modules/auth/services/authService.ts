import { User } from '../../../types/common';
import { fetchApi } from '../../../lib/api';
import { encryptData } from '../../../utils/encryption';

interface LoginCredentials {
  username: string;
  password: string;
}

interface LoginResponse {
  user: User;
  token: string;
}

export const authService = {
  async login({ username, password }: LoginCredentials) {
    try {
      // In production, this would make a real API call
      // For demo purposes, we're simulating an API response
      if (username === 'admin' && password === 'Admin@2024') {
        const mockUser: User = {
          id: '1',
          username: 'admin',
          email: 'admin@erp.iq',
          firstName: 'أحمد',
          lastName: 'محمد',
          role: 'admin',
          createdAt: new Date(),
          updatedAt: new Date(),
        };
        
        // Simulate token generation
        const token = encryptData({ userId: mockUser.id, role: mockUser.role });
        
        return { success: true, data: { user: mockUser, token } };
      }
      
      throw new Error('بيانات الدخول غير صحيحة');
    } catch (error) {
      return { 
        success: false, 
        error: error instanceof Error ? error.message : 'حدث خطأ أثناء تسجيل الدخول' 
      };
    }
  },

  logout() {
    localStorage.removeItem('auth_token');
  }
};