import React from 'react';
import { Project, ProjectPhase } from '../../types/project';
import { formatDate } from '../../../../utils/date';
import { getPhaseStatusColor } from '../../utils/statusHelpers';

interface ProjectTimelineProps {
  project: Project;
}

export default function ProjectTimeline({ project }: ProjectTimelineProps) {
  const calculateProgress = (phase: ProjectPhase) => {
    return `${phase.progress}%`;
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">الجدول الزمني للمشروع</h3>
      <div className="space-y-4">
        {project.phases.map((phase) => (
          <div key={phase.id} className="bg-white rounded-lg shadow-sm p-4">
            <div className="flex items-center justify-between mb-2">
              <div>
                <h4 className="font-medium">{phase.name.ar}</h4>
                <p className="text-sm text-gray-500">
                  {formatDate(phase.startDate)} - {formatDate(phase.endDate)}
                </p>
              </div>
              <span className={`px-2 py-1 text-xs rounded-full ${getPhaseStatusColor(phase.status)}`}>
                {phase.status}
              </span>
            </div>
            <div className="mt-2">
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-600 rounded-full h-2"
                  style={{ width: calculateProgress(phase) }}
                />
              </div>
            </div>
            <div className="mt-2 text-sm text-gray-600">
              {phase.deliverables.length} تسليمات
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}