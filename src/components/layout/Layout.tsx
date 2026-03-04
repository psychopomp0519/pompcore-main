/**
 * 레이아웃 컴포넌트
 * - Header + 메인 콘텐츠 + Footer를 감싸는 공통 레이아웃
 * - 모든 페이지에서 이 레이아웃을 사용하여 일관된 구조 유지
 */
import type { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-hero">
      <Header />
      <main className="flex-1 pt-20">{children}</main>
      <Footer />
    </div>
  );
}
