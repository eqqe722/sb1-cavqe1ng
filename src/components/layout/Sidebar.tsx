import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Home,
  Users,
  ShoppingCart,
  Package,
  FileText,
  Settings,
  Building2,
  FileSpreadsheet
} from 'lucide-react';

const navigation = [
  { name: 'الرئيسية', href: '/', icon: Home },
  { name: 'الموارد البشرية', href: '/hr', icon: Users },
  { name: 'المبيعات', href: '/sales', icon: ShoppingCart },
  { name: 'المخزون', href: '/inventory', icon: Package },
  { name: 'المالية', href: '/finance', icon: FileText },
  { name: 'المشتريات', href: '/procurement', icon: Building2 },
  { name: 'التقارير', href: '/reports', icon: FileSpreadsheet },
  { name: 'الإعدادات', href: '/settings', icon: Settings },
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white shadow-sm min-h-screen" dir="rtl">
      <nav className="mt-5 px-2">
        <div className="space-y-1">
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              className={({ isActive }) =>
                `flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                  isActive
                    ? 'bg-gray-100 text-gray-900'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`
              }
            >
              <item.icon className="ml-3 h-6 w-6" />
              {item.name}
            </NavLink>
          ))}
        </div>
      </nav>
    </aside>
  );
}