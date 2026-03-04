/**
 * CTA 배너 섹션
 * - 페이지 하단 회원가입 유도 영역
 * - 그라디언트 배경 + 간결한 메시지 + 버튼
 * - 추후 상세 UI 디자인 확정 시 이 파일만 수정
 */
import { Link } from 'react-router-dom';
import Button from '../../components/common/Button';

export default function CtaBanner() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <div className="relative overflow-hidden rounded-3xl p-12 md:p-16 text-center">
        {/* 배경 그라디언트 */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-600 to-purple-600 opacity-90" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.15),transparent_60%)]" />

        {/* 콘텐츠 */}
        <div className="relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            지금 시작하세요
          </h2>
          <p className="text-white/80 max-w-lg mx-auto mb-8">
            PompCore 계정을 만들고, 일상을 더 스마트하게 관리해보세요.
            모든 서비스를 무료로 체험할 수 있습니다.
          </p>
          <Link to="/auth/register">
            <Button
              variant="secondary"
              size="lg"
              className="bg-white/20 hover:bg-white/30 border-white/30 text-white"
            >
              무료로 시작하기
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
