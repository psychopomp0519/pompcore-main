/**
 * 출시 예정 서비스 데이터
 * - UpcomingSection에서 자동 렌더링
 * - 새 서비스 추가 시 이 배열에 항목 추가
 */

export interface UpcomingService {
  id: string;
  name: string;
  icon: string;
  category: string;
  description: string;
  status: 'coming_soon' | 'preparing';
  accentColor: string;
}

export const UPCOMING_SERVICES: UpcomingService[] = [
  {
    id: 'vault',
    name: 'Vault',
    icon: 'vault',
    category: '스마트 가계부',
    description: '수입과 지출을 한눈에 관리하고, 소비 습관을 분석해 드립니다',
    status: 'coming_soon',
    accentColor: '#10B981',
  },
  {
    id: 'quest',
    name: 'Quest',
    icon: 'quest',
    category: '일정 관리',
    description: '할 일을 퀘스트처럼 관리하고, 완료할 때마다 성장하세요',
    status: 'coming_soon',
    accentColor: '#7C3AED',
  },
  {
    id: 'academy',
    name: 'Academy',
    icon: 'academy',
    category: '온라인 과외',
    description: '소규모 1:1 과외를 편리하게 매칭하고 관리하세요',
    status: 'preparing',
    accentColor: '#FBBF24',
  },
];

/** 서비스 상태 라벨 */
export const UPCOMING_STATUS_LABELS: Record<string, string> = {
  coming_soon: '곧 출시',
  preparing: '준비 중',
};
