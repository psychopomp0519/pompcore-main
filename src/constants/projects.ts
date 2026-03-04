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
    icon: '🔐',
    status: 'coming_soon',
    category: 'finance',
    accentColor: 'text-emerald-600 dark:text-emerald-400',
    accentGradient: 'from-emerald-500 to-teal-500',
    logoSrc: vaultLogo,
  },
  {
    id: 'quest',
    name: 'Quest',
    description: '일정과 목표를 게임처럼 관리하세요.',
    longDescription:
      '일정 관리를 퀘스트처럼 재미있게. 할 일을 완료하면 경험치를 얻고, 습관을 레벨업하세요. 캘린더, 리마인더, 통계를 한 곳에서 관리합니다.',
    icon: '⚔️',
    status: 'coming_soon',
    category: 'productivity',
    accentColor: 'text-blue-600 dark:text-blue-400',
    accentGradient: 'from-blue-500 to-cyan-500',
    logoSrc: questLogo,
  },
];

/** 프로젝트 상태별 라벨 */
export const PROJECT_STATUS_LABELS: Record<string, string> = {
  active: '서비스 중',
  coming_soon: '출시 예정',
  beta: '베타 테스트',
  maintenance: '점검 중',
};
