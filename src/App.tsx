/**
 * App 루트 컴포넌트
 * - ErrorBoundary로 런타임 에러 포착
 * - RouterProvider로 라우팅 시스템 마운트
 * - 앱 초기화 시 인증 상태 확인
 */
import { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import { useAuthStore } from './store/authStore';
import { onAuthStateChange } from './services/authService';
import ErrorBoundary from './components/common/ErrorBoundary';

export default function App() {
  const initialize = useAuthStore((s) => s.initialize);
  const setUser = useAuthStore((s) => s.setUser);

  /** 앱 마운트 시 인증 상태 초기화 + 리스너 등록 */
  useEffect(() => {
    initialize();

    const { data: { subscription } } = onAuthStateChange((user) => {
      setUser(user);
    });

    return () => subscription.unsubscribe();
  }, [initialize, setUser]);

  return (
    <ErrorBoundary>
      <RouterProvider router={router} />
    </ErrorBoundary>
  );
}
