/**
 * UpcomingSection — 곧 만나볼 서비스
 * - constants/upcoming.ts 데이터 기반 자동 렌더링
 * - 알림 신청 CTA 포함
 */
import { Link } from 'react-router-dom';
import { UPCOMING_SERVICES, UPCOMING_STATUS_LABELS } from '../../constants/upcoming';
import { DynamicIcon, BellIcon } from '../../components/icons/Icons';
import BrandText from '../../components/common/BrandText';

export default function UpcomingSection() {
  return (
    <section className="bg-surface-light dark:bg-surface-dark-3 relative overflow-hidden py-24">
      {/* 배경 글로우 */}
      <div className="absolute top-[10%] right-[10%] w-[350px] h-[350px] bg-[#FFD700]/[0.03] rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[10%] w-[350px] h-[350px] bg-[#7C3AED]/[0.04] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* 헤더 */}
        <div className="text-center mb-16">
          <h2 className="font-display text-[28px] font-bold text-[#1A1A2E] dark:text-white mb-3">
            곧 만나볼 <span className="text-gradient">서비스</span>
          </h2>
          <p className="text-sm text-[#5C5C7A] dark:text-[#6A5490]">
            PompCore에서 준비 중인 새로운 경험들
          </p>
        </div>

        {/* 3열 카드 그리드 */}
        {UPCOMING_SERVICES.length === 0 ? (
          <div className="text-center py-12 mb-12">
            <p className="text-sm text-[#5C5C7A] dark:text-[#6A5490]">준비 중인 서비스가 없습니다.</p>
          </div>
        ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {UPCOMING_SERVICES.map((svc) => (
            <div
              key={svc.id}
              className="rounded-2xl p-6 bg-white/80 dark:bg-white/[0.02] border border-slate-200 dark:border-white/[0.06] text-center transition-all duration-300 hover:border-[#7C3AED]/20 hover:shadow-[0_0_30px_rgba(124,58,237,0.06)]"
            >
              {/* 아이콘 */}
              <div
                className="w-[60px] h-[60px] rounded-2xl mx-auto flex items-center justify-center mb-4"
                style={{ background: `${svc.accentColor}15`, color: svc.accentColor }}
              >
                <DynamicIcon name={svc.icon} size={32} fallback={svc.icon} />
              </div>
              {/* 이름 */}
              <h3 className="mb-1">
                <BrandText brand={svc.id} size="text-lg" />
              </h3>
              {/* 카테고리 */}
              <p className="text-[11px] tracking-wide text-[#5C5C7A] dark:text-[#6A5490] uppercase mb-3">
                {svc.category}
              </p>
              {/* 설명 */}
              <p className="text-sm text-[#4A4270] dark:text-[#7A6A9A] leading-relaxed mb-4">
                {svc.description}
              </p>
              {/* 상태 배지 */}
              <span className="inline-flex items-center gap-1.5 text-[11px] font-medium px-3 py-1 rounded-full bg-[#7C3AED]/[0.06] dark:bg-white/[0.04]">
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{
                    background: svc.status === 'coming_soon' ? '#10B981' : '#FBBF24',
                  }}
                />
                <span className="text-[#4A4270] dark:text-[#8A7AAA]">
                  {UPCOMING_STATUS_LABELS[svc.status]}
                </span>
              </span>
            </div>
          ))}
        </div>
        )}

        {/* 알림 신청 바 */}
        <div className="rounded-2xl p-6 md:p-8 bg-[#FFD700]/[0.04] dark:bg-[#FFD700]/[0.04] border border-[#FFD700]/10 flex flex-col md:flex-row items-center gap-4 md:gap-6">
          <span className="text-[#FFD700]" aria-hidden="true"><BellIcon size={28} /></span>
          <div className="flex-1 text-center md:text-left">
            <p className="text-sm font-medium text-[#1A1A2E] dark:text-white/90 mb-1">
              출시 알림을 받아보세요
            </p>
            <p className="text-xs text-[#5C5C7A] dark:text-[#6A5490]">
              회원가입하시면 새로운 서비스 출시 소식을 가장 먼저 받아보실 수 있습니다
            </p>
          </div>
          <Link to="/auth/register">
            <button className="inline-flex items-center justify-center px-6 py-2.5 text-sm rounded-xl min-h-[44px] font-medium transition-all duration-300 bg-gradient-to-r from-[#7C3AED] to-[#A855F7] text-white shadow-[0_4px_20px_rgba(124,58,237,0.2)] dark:shadow-[0_0_24px_rgba(124,58,237,0.25)] hover:from-[#6D28D9] hover:to-[#9333EA]">
              ✦ 알림 신청하기
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
