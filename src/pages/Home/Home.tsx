/**
 * 홈 페이지 (랜딩 페이지)
 * - PompCore 메인 브랜딩 페이지
 * - 섹션 순서 변경/추가/제거 시 아래 JSX만 수정
 * - 섹션 간 그라디언트 구분선으로 리듬감 연출
 */
import HeroSection from './HeroSection';
import ServicesSection from './ServicesSection';
import WhySection from './WhySection';
import UpcomingSection from './UpcomingSection';
import FaqSection from './FaqSection';
import CtaBanner from './CtaBanner';

export default function Home() {
  return (
    <>
      <HeroSection />
      <div className="section-divider-gradient-thick" />
      <ServicesSection />
      <div className="section-divider-gradient" />
      <WhySection />
      <div className="section-divider-gradient-thick" />
      <UpcomingSection />
      <div className="section-divider-gradient" />
      <FaqSection />
      <div className="section-divider-gradient-thick" />
      <CtaBanner />
    </>
  );
}
