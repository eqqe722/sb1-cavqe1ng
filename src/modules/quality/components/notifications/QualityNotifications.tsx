import React from 'react';
import { Card } from '../../../../components/common/Card';
import NotificationList from './NotificationList';
import ActionTracking from './ActionTracking';
import { useQualityNotifications } from '../../hooks/useQualityNotifications';
import { AlertTriangle, CheckCircle } from 'lucide-react';

export default function QualityNotifications() {
  const { notifications, actions, loading } = useQualityNotifications();

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card
          title="إخطارات الجودة"
          subtitle="متابعة مشاكل الجودة"
          icon={AlertTriangle}
        >
          <NotificationList notifications={notifications} loading={loading} />
        </Card>

        <Card
          title="الإجراءات التصحيحية"
          subtitle="متابعة الإجراءات التصحيحية"
          icon={CheckCircle}
        >
          <ActionTracking actions={actions} loading={loading} />
        </Card>
      </div>
    </div>
  );
}