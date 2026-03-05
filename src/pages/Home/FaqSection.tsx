/**
 * FAQ 섹션 — 자주 묻는 질문
 * - constants/faq.ts 데이터 기반 아코디언 UI
 * - aria-expanded 접근성 지원
 * - JSON-LD(FAQPage schema) 호환 데이터 구조
 */
import { useState } from 'react';
import { FAQ_ITEMS } from '../../constants/faq';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gradient-to-b from-[#F0F7FF] to-[#FAF8FF] dark:from-surface-dark-1 dark:to-surface-dark-1 relative overflow-hidden py-24">
      {/* 구름 (라이트 전용) */}
      <div className="dark:hidden absolute top-[10%] right-[12%] w-[160px] md:w-[260px] h-[50px] md:h-[72px] bg-white/50 rounded-full blur-[18px] pointer-events-none" />
      <div className="dark:hidden absolute bottom-[15%] left-[8%] w-[130px] md:w-[220px] h-[42px] md:h-[60px] bg-white/45 rounded-full blur-[16px] pointer-events-none" />
      {/* 별 (다크 전용) */}
      <div className="hidden dark:block absolute inset-0 pointer-events-none" aria-hidden="true">
        {Array.from({ length: 8 }).map((_, i) => (
          <span key={i} className="absolute w-[2px] h-[2px] bg-white rounded-full animate-twinkle" style={{ top: `${8 + (i * 10.5) % 82}%`, left: `${6 + (i * 11.3) % 87}%`, animationDelay: `${(i * 0.35).toFixed(2)}s`, opacity: 0.2 + (i % 3) * 0.15 }} />
        ))}
      </div>
      <div className="max-w-[640px] mx-auto px-4 sm:px-6 relative z-10">
        {/* 헤더 */}
        <div className="text-center mb-12">
          <h2 className="font-display text-[28px] font-bold text-[#1A1A2E] dark:text-white mb-3">
            자주 묻는 <span className="text-gradient">질문</span>
          </h2>
          <p className="text-sm text-[#5C5C7A] dark:text-[#6A5490]">
            궁금한 점이 있으신가요?
          </p>
        </div>

        {/* 아코디언 */}
        {FAQ_ITEMS.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-sm text-[#5C5C7A] dark:text-[#6A5490]">등록된 FAQ가 없습니다.</p>
          </div>
        ) : (
        <div className="space-y-3">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-xl bg-[#7C3AED]/[0.025] dark:bg-[#7C3AED]/[0.025] border border-[#7C3AED]/[0.07] dark:border-[#7C3AED]/[0.07] overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center gap-3 p-4 text-left min-h-[44px] cursor-pointer"
                >
                  {/* Q 아이콘 */}
                  <span className="font-display text-sm font-bold text-[#B8860B] dark:text-[#FFD700]/70 shrink-0">
                    Q
                  </span>
                  {/* 질문 텍스트 */}
                  <span className="flex-1 text-sm text-[#1A1A2E] dark:text-[#E0D8F0]">
                    {item.question}
                  </span>
                  {/* 화살표 */}
                  <span
                    className={`text-xs text-[#7C3AED]/50 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                    aria-hidden="true"
                  >
                    ▼
                  </span>
                </button>

                {/* 답변 — grid-rows 트랜지션으로 부드럽게 열고 닫기 */}
                <div
                  className="grid transition-[grid-template-rows] duration-300 ease-in-out"
                  style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
                >
                  <div className="overflow-hidden">
                    <div className="px-4 pb-4 pl-10">
                      <p className="text-[13px] text-[#5C5C7A] dark:text-[#7A6A9A] leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        )}
      </div>
    </section>
  );
}
