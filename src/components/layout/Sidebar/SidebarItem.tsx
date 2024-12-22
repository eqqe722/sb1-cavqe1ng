import React from 'react';
import { NavLink } from 'react-router-dom';
import { SidebarItemProps } from '../../../types/components';
import { clsx } from 'clsx';

export const SidebarItem: React.FC<SidebarItemProps> = ({
  icon: Icon,
  title,
  to,
  badge,
}) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        clsx(
          'flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200',
          isActive
            ? 'bg-primary-100 text-primary-900'
            : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
        )
      }
    >
      {Icon && <Icon className="ml-3 h-5 w-5" />}
      <span>{title}</span>
      {badge && (
        <span className="mr-auto bg-primary-100 text-primary-600 py-0.5 px-2 rounded-full text-xs">
          {badge}
        </span>
      )}
    </NavLink>
  );
};