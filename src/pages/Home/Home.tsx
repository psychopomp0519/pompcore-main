/**
 * 홈 페이지 (랜딩 페이지)
 * - PompCore 메인 브랜딩 페이지
 * - 섹션 순서 변경/추가/제거 시 아래 JSX만 수정
 */
import HeroSection from './HeroSection';
import FeaturesSection from './FeaturesSection';
import ProjectsPreview from './ProjectsPreview';
import CtaBanner from './CtaBanner';

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <ProjectsPreview />
      <CtaBanner />
    </>
  );
}
