```typescript
import { AuditableEntity, LocalizedContent } from '../../../types/database/common';

export interface Contractor extends AuditableEntity {
  contractorNumber: string;
  name: LocalizedContent;
  type: ContractorType;
  status: ContractorStatus;
  classification: ContractorClass;
  specialization: string[];
  registration: {
    number: string;
    issuedBy: string;
    issuedDate: Date;
    expiryDate: Date;
  };
  contact: {
    primaryContact: string;
    phone: string;
    email: string;
    address: string;
    governorate: string;
  };
  workforce: {
    totalEmployees: number;
    iraqiEmployees: number;
    foreignEmployees: number;
  };
  compliance: {
    laborLicense: string;
    socialSecurity: string;
    insurancePolicy: string;
    safetyCompliance: boolean;
  };
  financials: {
    bankName: string;
    accountNumber: string;
    taxNumber: string;
    creditLimit: number;
  };
  agreements: ContractorAgreement[];
  performance: PerformanceMetric[];
}

export interface ContractorAgreement extends AuditableEntity {
  agreementNumber: string;
  type: AgreementType;
  project: string;
  startDate: Date;
  endDate: Date;
  value: number;
  currency: string;
  scope: LocalizedContent;
  terms: {
    paymentTerms: string;
    retentionPercentage: number;
    penaltyTerms: string;
  };
  workforce: {
    requiredWorkers: number;
    minimumIraqiPercentage: number;
    skills: WorkerSkill[];
  };
  status: AgreementStatus;
}

export interface WorkerSkill {
  skill: string;
  level: SkillLevel;
  count: number;
  hourlyRate: number;
}

export interface PerformanceMetric {
  period: string;
  criteria: {
    qualityScore: number;
    timelinessScore: number;
    safetyScore: number;
    complianceScore: number;
  };
  incidents: number;
  complaints: number;
  recommendations: string[];
}

export type ContractorType = 
  | 'construction' 
  | 'services' 
  | 'supply' 
  | 'consulting';

export type ContractorStatus = 
  | 'active' 
  | 'suspended' 
  | 'blacklisted' 
  | 'expired';

export type ContractorClass = 
  | 'class_a' 
  | 'class_b' 
  | 'class_c' 
  | 'class_d';

export type AgreementType = 
  | 'fixed_price' 
  | 'time_materials' 
  | 'unit_price' 
  | 'cost_plus';

export type AgreementStatus = 
  | 'draft' 
  | 'active' 
  | 'suspended' 
  | 'completed' 
  | 'terminated';

export type SkillLevel = 
  | 'entry' 
  | 'intermediate' 
  | 'skilled' 
  | 'expert';
```