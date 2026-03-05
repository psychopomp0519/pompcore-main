/**
 * 프로젝트 상수 데이터
 * - 새 프로젝트 추가 시 이 배열에 항목을 추가하면 자동으로 UI에 반영됨
 * - url 필드에 실제 서비스 URL을 입력하면 프로젝트 카드에서 바로 연결
 */
import type { Project } from '../types/project.types';
import vaultLogo from '../assets/logos/vaultlogo.svg';
import questLogo from '../assets/logos/questlogo.svg';

export const PROJECTS: Project[] = [
  {
    id: 'vault',
    name: 'Vault',
    description: '스마트 가계부로 재정을 한눈에 관리하세요.',
    longDescription:
      '수입과 지출을 자동으로 분류하고, 시각적 리포트로 재정 상태를 파악하세요. 예산 설정과 알림 기능으로 건강한 소비 습관을 만들어 갑니다.',
    icon: 'vault',
    status: 'coming_soon',
    category: 'finance',
    categoryLabel: 'FINANCE · 스마트 가계부',
    accentColor: 'text-emerald-600 dark:text-emerald-400',
    accentGradient: 'from-emerald-500 to-teal-500',
    accentGradientCSS: 'linear-gradient(90deg, #10B981, #06D6A0)',
    logoSrc: vaultLogo,
    features: ['수입/지출 자동 분류', '월별 리포트', '예산 설정', '소비 패턴 분석'],
    stats: [
      { label: '편의성', value: 85 },
      { label: '분석력', value: 92 },
      { label: '보안', value: 95 },
      { label: '확장성', value: 78 },
    ],
  },
  {
    id: 'quest',
    name: 'Quest',
    description: '일정과 목표를 게임처럼 관리하세요.',
    longDescription:
      '일정 관리를 퀘스트처럼 재미있게. 할 일을 완료하면 경험치를 얻고, 습관을 레벨업하세요. 캘린더, 리마인더, 통계를 한 곳에서 관리합니다.',
    icon: 'quest',
    status: 'coming_soon',
    category: 'productivity',
    categoryLabel: 'PRODUCTIVITY · 일정 관리',
    accentColor: 'text-blue-600 dark:text-blue-400',
    accentGradient: 'from-blue-500 to-cyan-500',
    accentGradientCSS: 'linear-gradient(90deg, #7C3AED, #A855F7)',
    logoSrc: questLogo,
    features: ['경험치 & 레벨업', '캘린더 통합', '습관 트래커', '달성률 통계'],
    stats: [
      { label: '몰입도', value: 90 },
      { label: '성장', value: 88 },
      { label: '관리', value: 82 },
      { label: '재미', value: 94 },
    ],
  },
];

/** 프로젝트 상태별 라벨 */
export const PROJECT_STATUS_LABELS: Record<string, string> = {
  active: '서비스 중',
  coming_soon: '출시 예정',
  beta: '베타 테스트',
  maintenance: '점검 중',
};
