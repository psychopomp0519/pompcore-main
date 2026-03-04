/**
 * 회원가입 페이지
 * - PompCore SSO 통합 회원가입
 * - Supabase Auth와 연동 (authService를 통해)
 */
import { useState } from 'react';
import { Link } from 'react-router-dom';
import type { RegisterRequest } from '../../types/auth.types';
import Button from '../../components/common/Button';
import GlassCard from '../../components/common/GlassCard';

export default function Register() {
  const [form, setForm] = useState<RegisterRequest>({
    email: '',
    password: '',
    displayName: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  /** 입력값 변경 핸들러 */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setError(null);
  };

  /** 회원가입 제출 (추후 authService 연동) */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      // TODO: authService.register(form) 연동
      console.log('Register attempt:', form.email);
      alert('Supabase Auth 연동 후 동작합니다.');
    } catch (err) {
      const message = err instanceof Error ? err.message : '회원가입에 실패했습니다.';
      setError(message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="min-h-[80vh] flex items-center justify-center px-6">
      <GlassCard hoverable={false} padding="lg" className="w-full max-w-md">
        {/* 헤더 */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gradient mb-2">회원가입</h1>
          <p className="text-sm text-slate-400">PompCore 계정을 만들고 모든 서비스를 시작하세요</p>
        </div>

        {/* 에러 메시지 */}
        {error && (
          <div className="mb-4 p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
            {error}
          </div>
        )}

        {/* 회원가입 폼 */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="displayName" className="block text-sm font-medium text-slate-300 mb-1.5">
              닉네임
            </label>
            <input
              id="displayName"
              name="displayName"
              type="text"
              required
              value={form.displayName}
              onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-colors"
              placeholder="닉네임을 입력하세요"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1.5">
              이메일
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-colors"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-slate-300 mb-1.5">
              비밀번호
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              minLength={8}
              value={form.password}
              onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-colors"
              placeholder="8자 이상 입력하세요"
            />
          </div>

          <Button type="submit" variant="primary" size="md" className="w-full" isLoading={isLoading}>
            회원가입
          </Button>
        </form>

        {/* 하단 링크 */}
        <p className="text-center text-sm text-slate-400 mt-6">
          이미 계정이 있으신가요?{' '}
          <Link to="/auth/login" className="text-brand-400 hover:text-brand-300 transition-colors">
            로그인
          </Link>
        </p>
      </GlassCard>
    </section>
  );
}
