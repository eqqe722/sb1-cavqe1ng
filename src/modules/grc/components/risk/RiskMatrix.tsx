import React from 'react';
import { Risk, RiskImpact, RiskLikelihood } from '../../types/risk';

interface RiskMatrixProps {
  risks: Risk[];
}

export default function RiskMatrix({ risks }: RiskMatrixProps) {
  const impactLevels: RiskImpact[] = ['low', 'medium', 'high', 'critical'];
  const likelihoodLevels: RiskLikelihood[] = ['rare', 'unlikely', 'possible', 'likely', 'certain'];

  const getCellColor = (impact: RiskImpact, likelihood: RiskLikelihood): string => {
    const score = (impactLevels.indexOf(impact) + 1) * (likelihoodLevels.indexOf(likelihood) + 1);
    if (score <= 4) return 'bg-green-100 text-green-800';
    if (score <= 9) return 'bg-yellow-100 text-yellow-800';
    if (score <= 14) return 'bg-orange-100 text-orange-800';
    return 'bg-red-100 text-red-800';
  };

  const getRisksForCell = (impact: RiskImpact, likelihood: RiskLikelihood): Risk[] => {
    return risks.filter(risk => risk.impact === impact && risk.likelihood === likelihood);
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse">
        <thead>
          <tr>
            <th className="p-2 border"></th>
            {impactLevels.map(impact => (
              <th key={impact} className="p-2 border text-sm font-medium text-gray-600">
                {impact}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {likelihoodLevels.map(likelihood => (
            <tr key={likelihood}>
              <th className="p-2 border text-sm font-medium text-gray-600">
                {likelihood}
              </th>
              {impactLevels.map(impact => (
                <td key={`${likelihood}-${impact}`} className={`p-2 border ${getCellColor(impact, likelihood)}`}>
                  {getRisksForCell(impact, likelihood).map(risk => (
                    <div key={risk.id} className="text-xs p-1">
                      {risk.title.ar}
                    </div>
                  ))}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}