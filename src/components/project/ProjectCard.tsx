/**
 * 프로젝트 카드 컴포넌트
 * - 각 서브 프로젝트(Vault, Quest 등)를 카드 형태로 표시
 * - 상태에 따라 배지(서비스 중, 출시 예정 등) 표시
 * - url이 있으면 클릭 시 해당 서비스로 이동
 */
import type { Project } from '../../types/project.types';
import { PROJECT_STATUS_LABELS } from '../../constants/projects';
import GlassCard from '../common/GlassCard';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { name, description, icon, status, accentColor, accentGradient, url } =
    project;

  const statusLabel = PROJECT_STATUS_LABELS[status] ?? status;

  const handleClick = () => {
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <GlassCard
      className={`group relative overflow-hidden ${url ? 'cursor-pointer' : ''}`}
      padding="lg"
      onClick={url ? handleClick : undefined}
    >
      {/* 배경 그라디언트 효과 (호버 시 나타남) */}
      <div
        className={`
          absolute inset-0 bg-gradient-to-br ${accentGradient} opacity-0
          group-hover:opacity-10 transition-opacity duration-500
        `}
      />

      {/* 상태 배지 */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-4xl">{icon}</span>
        <span
          className={`
            text-xs font-medium px-3 py-1 rounded-full
            ${status === 'active' ? 'bg-green-500/20 text-green-400' : ''}
            ${status === 'coming_soon' ? 'bg-amber-500/20 text-amber-400' : ''}
            ${status === 'beta' ? 'bg-blue-500/20 text-blue-400' : ''}
            ${status === 'maintenance' ? 'bg-red-500/20 text-red-400' : ''}
          `}
        >
          {statusLabel}
        </span>
      </div>

      {/* 프로젝트 정보 */}
      <h3 className={`text-xl font-bold mb-2 ${accentColor}`}>{name}</h3>
      <p className="text-slate-400 text-sm leading-relaxed">{description}</p>

      {/* 링크 표시 */}
      {url && (
        <div className="mt-4 flex items-center text-sm text-brand-400 group-hover:text-brand-300 transition-colors">
          <span>서비스 바로가기</span>
          <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
        </div>
      )}
    </GlassCard>
  );
}
