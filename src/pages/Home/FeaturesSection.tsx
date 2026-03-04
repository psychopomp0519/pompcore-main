/**
 * 서비스 소개 섹션
 * - PompCore의 핵심 가치/특징을 아이콘 카드로 소개
 * - FEATURES 배열 수정으로 내용 변경 가능
 * - 추후 상세 UI 디자인 확정 시 이 파일만 수정
 */
import GlassCard from '../../components/common/GlassCard';

/** 특징 데이터 (내용 변경 시 여기만 수정) */
const FEATURES = [
  {
    icon: '🔑',
    title: '하나의 계정, 모든 서비스',
    description:
      'PompCore 계정 하나로 모든 프로젝트에 로그인하세요. 별도 가입 없이 바로 시작할 수 있습니다.',
  },
  {
    icon: '📱',
    title: '웹과 모바일, 어디서든',
    description:
      '웹사이트와 모바일 앱 모두 지원합니다. 장소에 상관없이 일상을 관리하세요.',
  },
  {
    icon: '🔒',
    title: '안전한 데이터 보호',
    description:
      '개인 정보와 데이터는 철저히 암호화하여 보호합니다. 안심하고 사용하세요.',
  },
  {
    icon: '🧩',
    title: '연결되는 서비스들',
    description:
      '가계부, 일정 관리 등 각 서비스가 유기적으로 연결되어 더 스마트한 경험을 제공합니다.',
  },
];

export default function FeaturesSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      {/* 섹션 헤더 */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          왜 <span className="text-gradient">PompCore</span>인가요?
        </h2>
        <p className="text-slate-400 max-w-xl mx-auto">
          하나의 플랫폼에서 일상의 모든 것을 관리하세요.
        </p>
      </div>

      {/* 특징 카드 그리드 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {FEATURES.map((feature) => (
          <GlassCard key={feature.title} padding="lg">
            <span className="text-3xl mb-4 block">{feature.icon}</span>
            <h3 className="text-lg font-semibold text-white mb-2">
              {feature.title}
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              {feature.description}
            </p>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}
