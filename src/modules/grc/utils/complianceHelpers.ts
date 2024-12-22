import { ComplianceRequirement, ComplianceControl } from '../types/compliance';

export const calculateComplianceScore = (
  controls: ComplianceControl[]
): number => {
  const implementedControls = controls.filter(
    control => control.status === 'implemented'
  ).length;
  
  return (implementedControls / controls.length) * 100;
};

export const getComplianceStatus = (score: number): ComplianceRequirement['status'] => {
  if (score >= 90) return 'compliant';
  if (score >= 60) return 'partially_compliant';
  return 'non_compliant';
};

export const prioritizeFindings = (
  requirements: ComplianceRequirement[]
): ComplianceRequirement[] => {
  return [...requirements].sort((a, b) => {
    const scoreA = calculateComplianceScore(a.controls);
    const scoreB = calculateComplianceScore(b.controls);
    return scoreA - scoreB;
  });
};