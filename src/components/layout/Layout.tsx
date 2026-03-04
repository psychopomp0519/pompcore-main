/**
 * 레이아웃 컴포넌트
 * - Header + 메인 콘텐츠 + Footer를 감싸는 공통 레이아웃
 * - 라이트 모드 기본, dark 클래스로 다크 모드 전환
 */
import type { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-surface dark:bg-surface-dark transition-colors duration-300">
      {/* 본문 바로가기 (WCAG 2.1 AA - 키보드/스크린리더 접근성) */}
      <a href="#main-content" className="skip-nav">
        본문 바로가기
      </a>
      <Header />
      <main id="main-content" className="flex-1 pt-20" role="main">
        {children}
      </main>
      <Footer />
    </div>
  );
}
