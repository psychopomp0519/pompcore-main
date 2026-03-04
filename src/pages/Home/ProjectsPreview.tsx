/**
 * 프로젝트 미리보기 섹션
 * - 홈 페이지 하단에 주요 프로젝트 카드를 표시
 * - constants/projects.ts의 데이터를 자동으로 렌더링
 */
import { PROJECTS } from '../../constants/projects';
import ProjectCard from '../../components/project/ProjectCard';

export default function ProjectsPreview() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      {/* 섹션 헤더 */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          우리의 <span className="text-gradient">프로젝트</span>
        </h2>
        <p className="text-slate-400 max-w-xl mx-auto">
          PompCore에서 개발 중인 서비스들을 확인하세요.
          하나의 계정으로 모든 서비스를 이용할 수 있습니다.
        </p>
      </div>

      {/* 프로젝트 카드 그리드 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}

        {/* 더 많은 프로젝트 예고 카드 */}
        <div className="glass p-8 flex items-center justify-center border-dashed border-2 border-white/10 rounded-2xl">
          <div className="text-center">
            <span className="text-4xl mb-3 block">✨</span>
            <p className="text-slate-400 text-sm">더 많은 프로젝트가 준비 중입니다</p>
          </div>
        </div>
      </div>
    </section>
  );
}
