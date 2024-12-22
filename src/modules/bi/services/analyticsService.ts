import { Dashboard } from '../types/analytics';
import { fetchApi } from '../../../lib/api';

export const analyticsService = {
  async getDashboards() {
    // Simulated API call
    return [
      {
        id: '1',
        title: { ar: 'لوحة المبيعات', en: 'Sales Dashboard' },
        description: { ar: 'تحليل أداء المبيعات', en: 'Sales Performance Analysis' },
        type: 'operational',
        widgets: [
          {
            id: 'w1',
            title: { ar: 'المبيعات الشهرية', en: 'Monthly Sales' },
            type: 'chart',
            size: 'medium',
            dataSource: {
              type: 'sql',
              query: 'SELECT * FROM sales',
              parameters: {}
            },
            visualization: {
              type: 'line',
              options: {},
              format: 'currency'
            },
            filters: []
          }
        ],
        filters: [],
        permissions: ['sales_view'],
        createdAt: new Date(),
        updatedAt: new Date(),
        createdBy: 'system',
        updatedBy: 'system'
      }
    ] as Dashboard[];
  },

  async getWidgetData(widgetId: string) {
    return fetchApi(`/analytics/widgets/${widgetId}/data`);
  },

  async saveDashboard(dashboard: Partial<Dashboard>) {
    return fetchApi('/analytics/dashboards', {
      method: 'POST',
      body: JSON.stringify(dashboard)
    });
  }
};