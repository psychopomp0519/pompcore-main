/**
 * Hero 섹션 컴포넌트
 * - 랜딩 페이지 최상단 메인 비주얼 영역
 * - 의식형(Ceremonial) 스타일 — 판타지 RPG 분위기
 * - 배경 글로우, 별 파티클(다크), 장식 프레임, 엠블럼, 서비스 미니 카드
 */
import { Link } from 'react-router-dom';
import Button from '../../components/common/Button';
import { VaultIcon, QuestIcon } from '../../components/icons/Icons';
import BrandText from '../../components/common/BrandText';
import type { IconProps } from '../../components/icons/Icons';

/** 히어로 내 서비스 미니 카드 데이터 */
const HERO_SERVICES: { brandKey: 'vault' | 'quest'; name: string; IconComponent: React.ComponentType<IconProps>; desc: string; borderColor: string; stats: { label: string; value: number }[] }[] = [
  {
    brandKey: 'vault',
    name: 'Vault',
    IconComponent: VaultIcon,
    desc: '스마트 가계부',
    borderColor: '#10B981',
    stats: [
      { label: '편의성', value: 85 },
      { label: '분석력', value: 92 },
    ],
  },
  {
    brandKey: 'quest',
    name: 'Quest',
    IconComponent: QuestIcon,
    desc: '일정 관리',
    borderColor: '#7C3AED',
    stats: [
      { label: '몰입도', value: 90 },
      { label: '성장', value: 88 },
    ],
  },
];

export default function HeroSection() {
  /** ServicesSection으로 스무스 스크롤 */
  const scrollToServices = () => {
    const el = document.getElementById('services-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#E8F4FD] via-[#F0F7FF] to-[#FAF8FF] dark:from-surface-dark-1 dark:via-surface-dark-1 dark:to-surface-dark-1"
      aria-label="히어로 영역"
    >
      {/* === 배경 글로우 오브 (다크: 별밤 글로우 / 라이트: 하늘빛 글로우) === */}
      <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[300px] md:w-[500px] lg:w-[600px] h-[300px] md:h-[500px] lg:h-[600px] bg-[#87CEEB]/[0.12] dark:bg-[#7C3AED]/[0.07] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[15%] right-[10%] w-[250px] md:w-[350px] lg:w-[400px] h-[250px] md:h-[350px] lg:h-[400px] bg-[#B0E0FF]/[0.08] dark:bg-[#FFD700]/[0.025] rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[5%] w-[200px] md:w-[300px] lg:w-[350px] h-[200px] md:h-[300px] lg:h-[350px] bg-[#E0F0FF]/[0.15] dark:bg-[#EC4899]/[0.03] rounded-full blur-[100px] pointer-events-none" />

      {/* === 구름 장식 (라이트 모드 전용) === */}
      <div className="dark:hidden absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute top-[8%] left-[15%] w-[120px] md:w-[200px] h-[40px] md:h-[60px] bg-white/40 rounded-full blur-[20px]" />
        <div className="absolute top-[15%] right-[20%] w-[150px] md:w-[250px] h-[50px] md:h-[70px] bg-white/30 rounded-full blur-[25px]" />
        <div className="absolute top-[25%] left-[40%] w-[100px] md:w-[180px] h-[35px] md:h-[50px] bg-white/35 rounded-full blur-[18px]" />
        <div className="absolute bottom-[30%] right-[10%] w-[130px] md:w-[220px] h-[45px] md:h-[65px] bg-white/25 rounded-full blur-[22px]" />
        <div className="absolute bottom-[15%] left-[25%] w-[160px] md:w-[260px] h-[50px] md:h-[70px] bg-white/30 rounded-full blur-[28px]" />
      </div>

      {/* === 별 파티클 (다크 모드 전용) === */}
      <div className="hidden dark:block absolute inset-0 pointer-events-none" aria-hidden="true">
        {Array.from({ length: 12 }).map((_, i) => (
          <span
            key={i}
            className="absolute w-[2px] h-[2px] bg-white rounded-full animate-twinkle"
            style={{
              top: `${8 + (i * 7.3) % 85}%`,
              left: `${5 + (i * 11.7) % 90}%`,
              animationDelay: `${(i * 0.33).toFixed(2)}s`,
              opacity: 0.3 + (i % 3) * 0.2,
            }}
          />
        ))}
      </div>

      {/* === 장식 프레임 (4 코너 L자 + 상하 다이아몬드 + 가로 라인) === */}
      <div className="absolute inset-4 sm:inset-8 md:inset-16 pointer-events-none" aria-hidden="true">
        {/* 코너 L자 보더 */}
        <div className="absolute top-0 left-0 w-9 h-9 border-t-[1.5px] border-l-[1.5px] border-[#7C3AED]/[0.12] dark:border-[#7C3AED]/[0.12]" />
        <div className="absolute top-0 right-0 w-9 h-9 border-t-[1.5px] border-r-[1.5px] border-[#7C3AED]/[0.12] dark:border-[#7C3AED]/[0.12]" />
        <div className="absolute bottom-0 left-0 w-9 h-9 border-b-[1.5px] border-l-[1.5px] border-[#7C3AED]/[0.12] dark:border-[#7C3AED]/[0.12]" />
        <div className="absolute bottom-0 right-0 w-9 h-9 border-b-[1.5px] border-r-[1.5px] border-[#7C3AED]/[0.12] dark:border-[#7C3AED]/[0.12]" />

        {/* 상하 다이아몬드 */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rotate-45 border border-[#7C3AED]/[0.15]" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 rotate-45 border border-[#7C3AED]/[0.15]" />

        {/* 가로 라인 (상단/하단) */}
        <div className="absolute top-0 left-12 right-12 h-[1px] bg-gradient-to-r from-transparent via-[#7C3AED]/10 to-transparent" />
        <div className="absolute bottom-0 left-12 right-12 h-[1px] bg-gradient-to-r from-transparent via-[#7C3AED]/10 to-transparent" />
      </div>

      {/* === 메인 콘텐츠 === */}
      <div className="relative z-10 max-w-2xl mx-auto px-6 text-center flex flex-col items-center gap-6 py-32">

        {/* 엠블럼 */}
        <div
          className="w-16 h-16 rounded-full border border-[#7C3AED]/[0.18] bg-[#7C3AED]/[0.04] flex items-center justify-center dark:shadow-[0_0_30px_rgba(124,58,237,0.08)]"
          aria-hidden="true"
        >
          <span className="font-display-deco text-2xl font-bold bg-gradient-to-b from-[#C8A0FF] to-[#FFD700] bg-clip-text text-transparent">
            P
          </span>
        </div>

        {/* 타이틀 */}
        <h1 className="font-display font-black leading-tight">
          <span className="block text-[38px] md:text-[42px] bg-gradient-to-r from-[#9B59B6] via-[#D4A017] to-[#E0598B] bg-clip-text text-transparent dark:from-[#E0C0FF] dark:via-[#FFD700] dark:to-[#FF90D0]">
            모험가여,
          </span>
          <span className="block text-[38px] md:text-[42px] text-[#1A1A2E] dark:text-white mt-1">
            당신의 이야기를
          </span>
          <span className="block text-[32px] md:text-[36px] text-[#1A1A2E]/70 dark:text-white/55 mt-1">
            여기서 시작하세요
          </span>
        </h1>

        {/* 골드 디바이더 */}
        <div
          className="w-[100px] h-[1px] bg-gradient-to-r from-transparent via-[#7C3AED]/20 to-transparent dark:via-[#FFD700]/30"
          aria-hidden="true"
        />

        {/* 서브카피 */}
        <p className="text-sm text-[#5C5C7A] dark:text-[#6A5490] max-w-md leading-relaxed">
          PompCore는 일상을 퀘스트로 바꾸는 플랫폼입니다.
          <br />
          가계부, 일정 관리, 그리고 더 많은 모험이 기다립니다.
        </p>

        {/* CTA 버튼 */}
        <div className="flex flex-col sm:flex-row gap-3 mt-2">
          <Link to="/auth/register">
            <Button variant="primary" size="md">
              ✦ 여정을 시작하다
            </Button>
          </Link>
          <button
            onClick={scrollToServices}
            className="inline-flex items-center justify-center px-6 py-2.5 text-base rounded-xl min-h-[44px] font-medium transition-all duration-300 bg-white border border-[#E0D8F0] text-[#7C3AED] hover:bg-brand-50 dark:bg-white/[0.03] dark:border-white/10 dark:text-[#A090C0] dark:hover:bg-white/[0.06]"
          >
            세계를 탐험하다
          </button>
        </div>

        {/* 서비스 미니 카드 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 w-full max-w-[600px]">
          {HERO_SERVICES.map((svc) => (
            <div
              key={svc.name}
              className="rounded-xl p-4 bg-white/80 dark:bg-white/[0.02] border border-slate-200 dark:border-white/[0.06] text-left"
              style={{ borderTopColor: svc.borderColor, borderTopWidth: '2px' }}
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xl" style={{ color: svc.borderColor }}><svc.IconComponent size={20} /></span>
                <div>
                  <BrandText brand={svc.brandKey} size="text-sm" />
                  <p className="text-[11px] text-[#5C5C7A] dark:text-[#6A5490]">{svc.desc}</p>
                </div>
              </div>
              {/* 스탯 바 */}
              <div className="space-y-1.5 mt-3">
                {svc.stats.map((stat) => (
                  <div key={stat.label}>
                    <div className="flex justify-between text-[10px] mb-0.5">
                      <span className="text-[#5C5C7A] dark:text-[#6A5490]">{stat.label}</span>
                      <span className="text-[#7C3AED] dark:text-[#A78BFA] font-medium">{stat.value}</span>
                    </div>
                    <div className="h-1 rounded-full bg-slate-200 dark:bg-white/[0.06] overflow-hidden">
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: `${stat.value}%`,
                          background: `linear-gradient(90deg, ${svc.borderColor}, ${svc.borderColor}88)`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* 스크롤 유도 */}
        <div className="flex flex-col items-center gap-2 mt-8" aria-hidden="true">
          <span className="text-[10px] tracking-[1.5px] text-[#6A5490] dark:text-[#6A5490] uppercase">
            DISCOVER
          </span>
          <span
            className="w-1 h-1 rounded-full bg-[#7C3AED] shadow-[0_0_8px_rgba(124,58,237,0.4)] animate-scroll-pulse"
          />
        </div>
      </div>
    </section>
  );
}
