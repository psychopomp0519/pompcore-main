/**
 * 서비스 상세 섹션
 * - Vault & Quest를 큰 카드 형태로 소개
 * - constants/projects.ts 데이터 기반 자동 렌더링
 * - 스탯 바는 장식용 (실제 데이터 미연동)
 */
import { PROJECTS } from '../../constants/projects';
import { DynamicIcon, SparkleIcon } from '../../components/icons/Icons';
import BrandText from '../../components/common/BrandText';

/** 스탯 바 컴포넌트 */
function StatBar({ label, value, color }: { label: string; value: number; color: string }) {
  return (
    <div>
      <div className="flex justify-between text-[11px] mb-1">
        <span className="text-[#4A4270] dark:text-[#6A5490]">{label}</span>
        <span className="font-medium" style={{ color }}>{value}</span>
      </div>
      <div className="h-1.5 rounded-full bg-slate-200 dark:bg-white/[0.06] overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-700"
          style={{ width: `${value}%`, background: color }}
        />
      </div>
    </div>
  );
}

export default function ServicesSection() {
  /** Vault/Quest 각각의 포인트 컬러 */
  const projectColors: Record<string, { name: string; border: string; bg: string; stat: string }> = {
    vault: {
      name: '#34D399',
      border: 'linear-gradient(90deg, #10B981, #06D6A0)',
      bg: 'rgba(16,185,129,0.015)',
      stat: '#10B981',
    },
    quest: {
      name: '#C084FC',
      border: 'linear-gradient(90deg, #7C3AED, #A855F7)',
      bg: 'rgba(124,58,237,0.02)',
      stat: '#7C3AED',
    },
  };

  return (
    <section
      id="services-section"
      className="snap-section bg-gradient-to-b from-sky-faint to-sky-mist dark:from-surface-dark-2 dark:to-surface-dark-2 relative overflow-hidden py-24 min-h-screen flex flex-col justify-center"
    >
      {/* 배경 글로우 */}
      <div className="absolute top-[10%] left-[5%] w-[250px] md:w-[350px] lg:w-[400px] h-[250px] md:h-[350px] lg:h-[400px] bg-[#B0E0FF]/[0.1] dark:bg-[#10B981]/[0.05] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[5%] w-[250px] md:w-[350px] lg:w-[400px] h-[250px] md:h-[350px] lg:h-[400px] bg-[#87CEEB]/[0.08] dark:bg-[#7C3AED]/[0.06] rounded-full blur-[120px] pointer-events-none" />
      {/* 구름 (라이트 전용) — 복합 구름 + 애니메이션 */}
      <div className="dark:hidden absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {/* 복합 구름 1 */}
        <div className="animate-cloud-drift-slow" style={{ animationDelay: '2s' }}>
          <div className="absolute top-[5%] right-[12%] w-[200px] md:w-[340px] h-[55px] md:h-[85px] bg-white/42 rounded-full blur-[26px]" />
          <div className="absolute top-[5.5%] right-[14%] w-[140px] md:w-[240px] h-[40px] md:h-[60px] bg-white/78 rounded-full blur-[12px]" />
        </div>
        {/* 복합 구름 2 */}
        <div className="animate-cloud-drift" style={{ animationDelay: '8s' }}>
          <div className="absolute bottom-[8%] left-[8%] w-[220px] md:w-[360px] h-[60px] md:h-[90px] bg-white/40 rounded-full blur-[28px]" />
          <div className="absolute bottom-[8.5%] left-[10%] w-[150px] md:w-[260px] h-[42px] md:h-[62px] bg-white/76 rounded-full blur-[12px]" />
        </div>
        {/* 복합 구름 3 */}
        <div className="animate-cloud-drift-slow" style={{ animationDelay: '14s' }}>
          <div className="absolute top-[15%] left-[28%] w-[150px] md:w-[250px] h-[45px] md:h-[65px] bg-white/38 rounded-full blur-[22px]" />
          <div className="absolute top-[15.5%] left-[30%] w-[100px] md:w-[170px] h-[32px] md:h-[45px] bg-white/75 rounded-full blur-[10px]" />
        </div>
        {/* 작은 구름 */}
        <div className="animate-cloud-drift" style={{ animationDelay: '5s' }}>
          <div className="absolute top-[40%] right-[25%] w-[90px] md:w-[150px] h-[30px] md:h-[45px] bg-white/80 rounded-full blur-[8px]" />
        </div>
        <div className="animate-cloud-drift-slow" style={{ animationDelay: '10s' }}>
          <div className="absolute bottom-[25%] left-[45%] w-[80px] md:w-[130px] h-[28px] md:h-[40px] bg-white/78 rounded-full blur-[7px]" />
        </div>
      </div>
      {/* 별 (다크 전용) */}
      <div className="hidden dark:block absolute inset-0 pointer-events-none" aria-hidden="true">
        {Array.from({ length: 15 }).map((_, i) => (
          <span key={i} className="absolute w-[2px] h-[2px] bg-white rounded-full animate-twinkle" style={{ top: `${5 + (i * 6.2) % 88}%`, left: `${3 + (i * 6.7) % 93}%`, animationDelay: `${(i * 0.27).toFixed(2)}s`, opacity: 0.2 + (i % 3) * 0.15 }} />
        ))}
        {[{ top: '12%', left: '85%' }, { top: '70%', left: '10%' }].map((pos, i) => (
          <span key={`b-${i}`} className="absolute w-[3px] h-[3px] bg-white rounded-full animate-twinkle" style={{ ...pos, animationDelay: `${(i * 1.2).toFixed(2)}s`, opacity: 0.7, boxShadow: '0 0 4px 1px rgba(255,255,255,0.3)' }} />
        ))}
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        {/* 헤더 */}
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="font-display text-xl sm:text-[28px] font-bold text-[#1A1A2E] dark:text-white mb-3">
            우리의 <span className="text-gradient">프로젝트</span>
          </h2>
          <p className="text-sm text-[#5C5C7A] dark:text-[#6A5490]">
            각 서비스를 마스터하고 경험치를 쌓아 레벨업하세요
          </p>
        </div>

        {/* 서비스 카드들 */}
        {PROJECTS.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-sm text-[#5C5C7A] dark:text-[#6A5490]">등록된 프로젝트가 없습니다.</p>
          </div>
        ) : (
        <div className="space-y-8">
          {PROJECTS.map((project) => {
            const colors = projectColors[project.id] ?? projectColors.vault;
            return (
              <div
                key={project.id}
                className="rounded-2xl border border-[#7C3AED]/[0.08] dark:border-white/[0.06] overflow-hidden"
                style={{ background: colors.bg }}
              >
                {/* 상단 그라디언트 보더 */}
                <div className="h-[2px]" style={{ background: colors.border }} />

                <div className="grid grid-cols-1 md:grid-cols-5 gap-4 sm:gap-6 p-4 sm:p-6 md:p-8">
                  {/* 좌측: 정보 (3/5) */}
                  <div className="md:col-span-3 space-y-4">
                    {/* 아이콘 + 이름 + 카테고리 */}
                    <div className="flex items-center gap-3">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center"
                        style={{ background: `${colors.stat}15`, color: colors.stat }}
                      >
                        <DynamicIcon name={project.icon} size={28} fallback={project.icon} />
                      </div>
                      <div>
                        <h3>
                          <BrandText brand={project.id} size="text-xl" />
                        </h3>
                        <p className="text-[11px] tracking-wide text-[#5C5C7A] dark:text-[#6A5490] uppercase">
                          {project.categoryLabel ?? project.category}
                        </p>
                      </div>
                    </div>

                    {/* 설명 */}
                    <p className="text-sm text-[#4A4270] dark:text-[#7A6A9A] leading-relaxed">
                      {project.longDescription}
                    </p>

                    {/* 기능 리스트 */}
                    {project.features && (
                      <ul className="grid grid-cols-2 gap-2">
                        {project.features.map((feat) => (
                          <li key={feat} className="flex items-center gap-1.5 text-xs text-[#4A4270] dark:text-[#7A6A9A]">
                            <span className="text-[#FFD700] text-[10px]">✦</span>
                            {feat}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  {/* 우측: 스탯 패널 (2/5) */}
                  <div className="md:col-span-2">
                    <div className="rounded-xl bg-white/50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/[0.06] p-5">
                      <p className="text-center text-[10px] tracking-[2px] text-[#5C5C7A] dark:text-[#6A5490] mb-4 uppercase">
                        ◇ ABILITY STATS ◇
                      </p>
                      <div className="space-y-3">
                        {project.stats?.map((stat) => (
                          <StatBar key={stat.label} label={stat.label} value={stat.value} color={colors.stat} />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          {/* 예고 카드 */}
          <div className="rounded-2xl p-4 sm:p-8 flex items-center justify-center border-2 border-dashed border-slate-200 dark:border-white/[0.08] bg-transparent">
            <div className="text-center">
              <span className="text-[#FFD700] mb-2 block"><SparkleIcon size={32} /></span>
              <p className="text-sm text-[#5C5C7A] dark:text-[#6A5490]">
                더 많은 프로젝트가 준비 중입니다
              </p>
            </div>
          </div>
        </div>
        )}
      </div>
    </section>
  );
}
