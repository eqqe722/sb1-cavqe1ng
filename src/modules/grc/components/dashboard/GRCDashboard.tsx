```typescript
import React from 'react';
import { Card } from '../../../../components/common/Card';
import { Shield, AlertTriangle, FileCheck, Lock, Flame, Building2, Landmark, Construction } from 'lucide-react';
import { useRiskMetrics } from '../../hooks/useRiskMetrics';
import { useComplianceMetrics } from '../../hooks/useComplianceMetrics';

export default function GRCDashboard() {
  const { riskMetrics, loading: riskLoading } = useRiskMetrics();
  const { complianceMetrics, loading: complianceLoading } = useComplianceMetrics();

  return (
    <div className="space-y-6">
      {/* Risk & Compliance Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card
          title="المخاطر النشطة"
          subtitle="المخاطر التي تتطلب المتابعة"
          icon={AlertTriangle}
        >
          <div className="mt-2">
            <div className="text-3xl font-bold">{riskMetrics?.activeRisks || 0}</div>
            <div className="text-sm text-gray-500">{riskMetrics?.criticalRisks || 0} مخاطر حرجة</div>
          </div>
        </Card>

        <Card
          title="الامتثال"
          subtitle="نسبة الامتثال الكلية"
          icon={Shield}
        >
          <div className="mt-2">
            <div className="text-3xl font-bold">{complianceMetrics?.overallCompliance || 0}%</div>
            <div className="text-sm text-gray-500">من المتطلبات التنظيمية</div>
          </div>
        </Card>

        <Card
          title="التدقيق"
          subtitle="عمليات التدقيق الجارية"
          icon={FileCheck}
        >
          <div className="mt-2">
            <div className="text-3xl font-bold">{complianceMetrics?.activeAudits || 0}</div>
            <div className="text-sm text-gray-500">{complianceMetrics?.pendingFindings || 0} ملاحظات معلقة</div>
          </div>
        </Card>

        <Card
          title="الصلاحيات"
          subtitle="طلبات الوصول المعلقة"
          icon={Lock}
        >
          <div className="mt-2">
            <div className="text-3xl font-bold">{complianceMetrics?.pendingAccessRequests || 0}</div>
            <div className="text-sm text-gray-500">{complianceMetrics?.criticalAccess || 0} طلبات حساسة</div>
          </div>
        </Card>
      </div>

      {/* Specialized Sectors */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card
          title="قطاع الطاقة"
          subtitle="امتثال النفط والغاز"
          icon={Flame}
        >
          <div className="mt-2">
            <div className="text-3xl font-bold">{complianceMetrics?.energyCompliance || 0}%</div>
            <div className="text-sm text-gray-500">معايير وزارة النفط</div>
          </div>
        </Card>

        <Card
          title="القطاع العام"
          subtitle="امتثال المؤسسات الحكومية"
          icon={Building2}
        >
          <div className="mt-2">
            <div className="text-3xl font-bold">{complianceMetrics?.publicSectorCompliance || 0}%</div>
            <div className="text-sm text-gray-500">متطلبات القطاع العام</div>
          </div>
        </Card>

        <Card
          title="التمويل الإسلامي"
          subtitle="الامتثال الشرعي"
          icon={Landmark}
        >
          <div className="mt-2">
            <div className="text-3xl font-bold">{complianceMetrics?.islamicFinanceCompliance || 0}%</div>
            <div className="text-sm text-gray-500">معايير الشريعة</div>
          </div>
        </Card>

        <Card
          title="قطاع الإنشاءات"
          subtitle="امتثال المشاريع"
          icon={Construction}
        >
          <div className="mt-2">
            <div className="text-3xl font-bold">{complianceMetrics?.constructionCompliance || 0}%</div>
            <div className="text-sm text-gray-500">معايير البناء العراقية</div>
          </div>
        </Card>
      </div>
    </div>
  );
}
```