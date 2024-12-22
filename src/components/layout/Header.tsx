import React from 'react';
import { useAuthStore } from '../../stores/authStore';
import { LogOut, User, Moon, Sun } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';

export default function Header() {
  const { user, logout } = useAuthStore();
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="bg-white shadow-sm" dir="rtl">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between items-center">
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold">نظام إدارة الموارد</h1>
          </div>
          
          <div className="flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100"
              aria-label="تبديل المظهر"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            
            <div className="flex items-center gap-2">
              <User className="w-5 h-5" />
              <span>{user?.firstName} {user?.lastName}</span>
            </div>
            
            <button
              onClick={logout}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
            >
              <LogOut className="w-5 h-5" />
              <span>تسجيل الخروج</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}