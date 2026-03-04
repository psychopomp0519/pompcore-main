/**
 * 글래스모피즘 카드 컴포넌트
 * - 반투명 배경 + backdrop-blur 효과
 * - PompCore UI의 핵심 디자인 요소
 * - hover 시 부드러운 스케일업 + 글로우 효과
 */
import type { HTMLAttributes, ReactNode } from 'react';

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  /** 호버 글로우 효과 활성화 (기본: true) */
  hoverable?: boolean;
  /** 패딩 크기 */
  padding?: 'sm' | 'md' | 'lg';
}

const paddingStyles = {
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
};

export default function GlassCard({
  children,
  hoverable = true,
  padding = 'md',
  className = '',
  ...props
}: GlassCardProps) {
  return (
    <div
      className={`
        glass shadow-glass
        ${paddingStyles[padding]}
        ${hoverable ? 'hover-glow' : ''}
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
}
