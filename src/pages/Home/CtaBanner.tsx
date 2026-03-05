/**
 * CTA 배너 섹션
 * - 페이지 하단 회원가입 유도 영역
 * - Nebula 그라디언트 배경 + 코너 장식 + 골드 오버레이
 */
import { Link } from 'react-router-dom';

export default function CtaBanner() {
  return (
    <section className="bg-surface-light dark:bg-surface-dark-3 relative overflow-hidden py-24">
      {/* 구름 (라이트 전용) */}
      <div className="dark:hidden absolute top-[15%] left-[10%] w-[150px] md:w-[240px] h-[48px] md:h-[68px] bg-white/40 rounded-full blur-[18px] pointer-events-none" />
      {/* 별 (다크 전용) */}
      <div className="hidden dark:block absolute inset-0 pointer-events-none" aria-hidden="true">
        {Array.from({ length: 6 }).map((_, i) => (
          <span key={i} className="absolute w-[2px] h-[2px] bg-white rounded-full animate-twinkle" style={{ top: `${10 + (i * 13) % 78}%`, left: `${8 + (i * 14.3) % 83}%`, animationDelay: `${(i * 0.4).toFixed(2)}s`, opacity: 0.2 + (i % 3) * 0.12 }} />
        ))}
      </div>
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="relative overflow-hidden rounded-[20px] p-6 sm:p-10 md:px-10 md:py-14 text-center">
          {/* 배경 그라디언트 */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#7C3AED] to-[#A855F7] opacity-[0.92]" />
          {/* 골드 radial 오버레이 */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,215,0,0.15),transparent_60%)]" />
          {/* 다이아몬드 패턴 (장식) */}
          <div className="absolute inset-0 opacity-[0.04]" style={{
            backgroundImage: 'repeating-conic-gradient(rgba(255,255,255,0.5) 0% 25%, transparent 0% 50%)',
            backgroundSize: '20px 20px',
          }} />

          {/* 코너 장식 L자 보더 */}
          <div className="absolute inset-4 pointer-events-none" aria-hidden="true">
            <div className="absolute top-0 left-0 w-6 h-6 border-t-[1.5px] border-l-[1.5px] border-white/[0.18]" />
            <div className="absolute top-0 right-0 w-6 h-6 border-t-[1.5px] border-r-[1.5px] border-white/[0.18]" />
            <div className="absolute bottom-0 left-0 w-6 h-6 border-b-[1.5px] border-l-[1.5px] border-white/[0.18]" />
            <div className="absolute bottom-0 right-0 w-6 h-6 border-b-[1.5px] border-r-[1.5px] border-white/[0.18]" />
          </div>

          {/* 콘텐츠 */}
          <div className="relative z-10">
            <h2 className="font-display text-[28px] font-bold text-white mb-4">
              새로운 모험을 시작하세요
            </h2>
            <p className="text-white/80 max-w-lg mx-auto mb-8 text-sm leading-relaxed">
              PompCore 계정을 만들고, 일상을 퀘스트로 바꿔보세요.
              <br />
              모든 서비스를 무료로 체험할 수 있습니다.
            </p>
            <Link to="/auth/register">
              <button className="inline-flex items-center justify-center px-8 py-3 text-base rounded-xl min-h-[48px] font-medium transition-all duration-300 bg-white/15 border border-white/25 text-white backdrop-blur-sm shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:bg-white/25 hover:shadow-[0_0_30px_rgba(255,255,255,0.15)] cursor-pointer">
                ✦ 무료로 시작하기
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
