/**
 * 헤더 컴포넌트
 * - PompCore 전역 네비게이션 바
 * - 스크롤 시 배경 활성화, 라이트/다크 모드 대응
 * - 다크 모드 토글 버튼 포함
 */
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button from '../common/Button';
import { useThemeStore } from '../../store/themeStore';
import pompcoreLogo from '../../assets/logos/pompcorelogo.svg';

/** 네비게이션 메뉴 항목 (확장 시 여기에 추가) */
const NAV_ITEMS = [
  { label: '홈', path: '/' },
  { label: '프로젝트', path: '/projects' },
  { label: '소개', path: '/about' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useThemeStore();

  /** 스크롤 감지하여 헤더 배경 변경 */
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /** 페이지 이동 시 모바일 메뉴 닫기 */
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${isScrolled
          ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl shadow-sm border-b border-slate-200 dark:border-white/10 py-3'
          : 'bg-transparent py-5'
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* 로고 */}
        <Link to="/" className="flex items-center gap-2 group">
          <img src={pompcoreLogo} alt="PompCore" className="h-8 w-8 dark:invert" />
          <span className="text-xl font-bold text-navy dark:text-white">PompCore</span>
        </Link>

        {/* 데스크톱 네비게이션 */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`
                text-sm font-medium transition-colors duration-200
                ${location.pathname === item.path
                  ? 'text-brand-600 dark:text-brand-400'
                  : 'text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
                }
              `}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* 우측 버튼들 */}
        <div className="hidden md:flex items-center gap-3">
          {/* 다크 모드 토글 */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-100 dark:text-slate-400 dark:hover:text-white dark:hover:bg-white/10 transition-colors"
            aria-label="테마 변경"
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>

          <Link to="/auth/login">
            <Button variant="ghost" size="sm">로그인</Button>
          </Link>
          <Link to="/auth/register">
            <Button variant="primary" size="sm">시작하기</Button>
          </Link>
        </div>

        {/* 모바일: 테마 토글 + 햄버거 */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg text-slate-500 dark:text-slate-400"
            aria-label="테마 변경"
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
          <button
            className="p-2 text-slate-700 dark:text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="메뉴 열기"
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span className={`block h-0.5 bg-current transition-transform ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block h-0.5 bg-current transition-opacity ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 bg-current transition-transform ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      {/* 모바일 메뉴 드롭다운 */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 mt-2 mx-4 p-4 rounded-2xl shadow-lg animate-fade-in">
          <nav className="flex flex-col gap-3">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white py-2"
              >
                {item.label}
              </Link>
            ))}
            <hr className="border-slate-200 dark:border-white/10 my-2" />
            <Link to="/auth/login">
              <Button variant="ghost" size="sm" className="w-full">로그인</Button>
            </Link>
            <Link to="/auth/register">
              <Button variant="primary" size="sm" className="w-full">시작하기</Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
