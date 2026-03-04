/**
 * 라우터 설정
 * - 모든 페이지 경로를 중앙에서 관리
 * - 새 페이지 추가 시 이 파일의 routes 배열에 추가
 * - Layout으로 감싸여 Header/Footer가 자동 적용
 */
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Home from '../pages/Home/Home';
import Projects from '../pages/Projects/Projects';
import About from '../pages/About/About';
import Login from '../pages/Auth/Login';
import Register from '../pages/Auth/Register';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout><Home /></Layout>,
  },
  {
    path: '/projects',
    element: <Layout><Projects /></Layout>,
  },
  {
    path: '/about',
    element: <Layout><About /></Layout>,
  },
  {
    path: '/auth/login',
    element: <Layout><Login /></Layout>,
  },
  {
    path: '/auth/register',
    element: <Layout><Register /></Layout>,
  },
]);
