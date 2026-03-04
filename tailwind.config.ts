/**
 * Tailwind CSS 설정 파일
 * PompCore 통합 디자인 토큰 정의
 * - 모든 서브 프로젝트(Vault, Quest 등)에서 이 설정을 공유하여 일관된 UI 유지
 * - 색상, 폰트, 애니메이션 등 디자인 시스템의 단일 진실 공급원(Single Source of Truth)
 */
import type { Config } from 'tailwindcss';
import forms from '@tailwindcss/forms';

const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      /* PompCore 브랜드 컬러 팔레트 (로고 네이비 기반) */
      colors: {
        brand: {
          50: '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81',
          950: '#1e1b4b',
        },
        navy: {
          DEFAULT: '#2B3442',
          light: '#3d4a5c',
          dark: '#1a2332',
        },
        surface: {
          DEFAULT: '#f8fafc',
          dark: '#0f172a',
          card: 'rgba(255, 255, 255, 0.8)',
          'card-dark': 'rgba(30, 41, 59, 0.5)',
        },
      },
      /* 폰트 패밀리 (한국어 최적화: Pretendard > Noto Sans KR) */
      fontFamily: {
        sans: ['Pretendard', 'Inter', 'Noto Sans KR', 'system-ui', '-apple-system', 'sans-serif'],
      },
      /* 박스 쉐도우 */
      boxShadow: {
        card: '0 1px 3px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(0, 0, 0, 0.04)',
        'card-hover': '0 4px 12px rgba(0, 0, 0, 0.1), 0 8px 32px rgba(0, 0, 0, 0.08)',
        glass: '0 8px 32px rgba(0, 0, 0, 0.12)',
        'glass-lg': '0 16px 48px rgba(0, 0, 0, 0.2)',
        glow: '0 0 20px rgba(99, 102, 241, 0.3)',
      },
      /* 배경 블러 */
      backdropBlur: {
        glass: '16px',
      },
      /* 커스텀 애니메이션 */
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [forms],
};

export default config;
