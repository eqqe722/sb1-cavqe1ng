import React from 'react';
import { CardProps } from '../../types/components';
import { clsx } from 'clsx';

export const Card: React.FC<CardProps> = ({
  children,
  className,
  title,
  subtitle,
  actions,
  ...props
}) => {
  return (
    <div
      className={clsx(
        'bg-white rounded-lg shadow-sm overflow-hidden',
        className
      )}
      {...props}
    >
      {(title || subtitle || actions) && (
        <div className="px-6 py-4 border-b border-gray-200">
          <div className="flex justify-between items-center">
            <div>
              {title && (
                <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
              )}
              {subtitle && (
                <p className="mt-1 text-sm text-gray-500">{subtitle}</p>
              )}
            </div>
            {actions && <div className="flex space-x-2">{actions}</div>}
          </div>
        </div>
      )}
      <div className="px-6 py-4">{children}</div>
    </div>
  );
};