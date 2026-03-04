/**
 * Hero 섹션 컴포넌트
 * - 랜딩 페이지 최상단 메인 비주얼 영역
 * - 브랜드 메시지 + CTA 버튼 + 배경 그라디언트 오브
 */
import { Link } from 'react-router-dom';
import Button from '../../components/common/Button';

export default function HeroSection() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* 배경 장식 오브 */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-brand-500/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />

      {/* 메인 콘텐츠 */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* 브랜드 배지 */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse" />
          <span className="text-sm text-slate-300">PompCore 플랫폼 준비 중</span>
        </div>

        {/* 메인 타이틀 */}
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 animate-slide-up">
          일상을 더{' '}
          <span className="text-gradient">스마트</span>하게,
          <br />
          PompCore와 함께.
        </h1>

        {/* 서브 카피 */}
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          가계부부터 일정 관리까지, 하나의 계정으로 연결되는
          <br className="hidden md:block" />
          통합 라이프스타일 플랫폼
        </p>

        {/* CTA 버튼 */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <Link to="/projects">
            <Button variant="primary" size="lg">
              프로젝트 둘러보기
            </Button>
          </Link>
          <Link to="/about">
            <Button variant="secondary" size="lg">
              더 알아보기
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
