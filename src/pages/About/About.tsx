/**
 * 회사 소개 페이지
 * - PompCore 비전, 미션, 팀 소개 등
 */
import GlassCard from '../../components/common/GlassCard';

const VALUES = [
  {
    icon: '🎯',
    title: '사용자 중심',
    description: '모든 기능은 사용자의 실제 필요에서 시작합니다.',
  },
  {
    icon: '🔗',
    title: '통합 경험',
    description: '하나의 계정으로 모든 서비스를 자연스럽게 연결합니다.',
  },
  {
    icon: '🛡️',
    title: '신뢰와 보안',
    description: '개인 정보 보호와 데이터 보안을 최우선으로 합니다.',
  },
];

export default function About() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      {/* 페이지 헤더 */}
      <div className="max-w-3xl mb-16">
        <h1 className="text-4xl font-bold mb-4">
          <span className="text-gradient">PompCore</span> 소개
        </h1>
        <p className="text-lg text-slate-400 leading-relaxed">
          PompCore는 일상 속 다양한 작업들을 하나의 플랫폼에서 편안하게 관리할 수 있도록
          돕는 디지털 서비스 회사입니다. 가계부, 일정 관리, 교육 보조 등
          생활 밀착형 서비스를 개발하고 있습니다.
        </p>
      </div>

      {/* 핵심 가치 */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-8">핵심 가치</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {VALUES.map((value) => (
            <GlassCard key={value.title} padding="lg">
              <span className="text-3xl mb-4 block">{value.icon}</span>
              <h3 className="text-lg font-semibold text-white mb-2">{value.title}</h3>
              <p className="text-sm text-slate-400">{value.description}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
