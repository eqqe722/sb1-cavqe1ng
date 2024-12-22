import { AuditableEntity, LocalizedContent } from '../../../types/database/common';

export interface Dashboard extends AuditableEntity {
  title: LocalizedContent;
  description: LocalizedContent;
  type: DashboardType;
  widgets: Widget[];
  filters: DashboardFilter[];
  refreshInterval?: number;
  permissions: string[];
}

export interface Widget {
  id: string;
  title: LocalizedContent;
  type: WidgetType;
  size: WidgetSize;
  dataSource: DataSource;
  visualization: Visualization;
  filters: WidgetFilter[];
  refreshInterval?: number;
}

export interface DataSource {
  type: DataSourceType;
  query: string;
  parameters: Record<string, any>;
  cache?: {
    duration: number;
    key: string;
  };
}

export interface Visualization {
  type: VisualizationType;
  options: Record<string, any>;
  format: DataFormat;
}

export interface DashboardFilter {
  field: string;
  operator: FilterOperator;
  value: any;
  label: LocalizedContent;
  type: FilterType;
}

export type DashboardType = 'executive' | 'operational' | 'analytical' | 'tactical';
export type WidgetType = 'chart' | 'table' | 'metric' | 'map';
export type WidgetSize = 'small' | 'medium' | 'large' | 'full';
export type DataSourceType = 'sql' | 'api' | 'file' | 'cube';
export type VisualizationType = 'line' | 'bar' | 'pie' | 'table' | 'gauge' | 'map';
export type FilterOperator = 'equals' | 'contains' | 'greater' | 'less' | 'between';
export type FilterType = 'date' | 'text' | 'number' | 'select' | 'multiselect';
export type DataFormat = 'number' | 'currency' | 'percentage' | 'date' | 'text';