import { useCallback } from 'react';
import { useAuthStore } from '../stores/authStore';
import { User } from '../types/common';

export const useAuth = () => {
  const { user, login, logout, isAuthenticated } = useAuthStore();

  const handleLogin = useCallback(async (username: string, password: string) => {
    try {
      // In production, this would make an API call
      const mockUser: User = {
        id: '1',
        username,
        email: `${username}@example.com`,
        firstName: 'أحمد',
        lastName: 'محمد',
        role: 'admin',
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      
      login(mockUser);
      return { success: true };
    } catch (error) {
      return { 
        success: false, 
        error: 'فشل تسجيل الدخول. يرجى التحقق من اسم المستخدم وكلمة المرور.' 
      };
    }
  }, [login]);

  const handleLogout = useCallback(() => {
    logout();
  }, [logout]);

  return {
    user,
    isAuthenticated,
    login: handleLogin,
    logout: handleLogout,
  };
};