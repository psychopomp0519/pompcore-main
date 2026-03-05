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
      className="bg-surface-light dark:bg-surface-dark-2 relative overflow-hidden py-24"
    >
      {/* 배경 글로우 */}
      <div className="absolute top-[10%] left-[5%] w-[400px] h-[400px] bg-[#10B981]/[0.05] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[5%] w-[400px] h-[400px] bg-[#7C3AED]/[0.06] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* 헤더 */}
        <div className="text-center mb-16">
          <h2 className="font-display text-[28px] font-bold text-[#1A1A2E] dark:text-white mb-3">
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

                <div className="grid grid-cols-1 md:grid-cols-5 gap-6 p-6 md:p-8">
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
          <div className="rounded-2xl p-8 flex items-center justify-center border-2 border-dashed border-slate-200 dark:border-white/[0.08] bg-transparent">
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
