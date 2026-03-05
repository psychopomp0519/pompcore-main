/**
 * 브랜드 로고 텍스트 컴포넌트
 * - PompCore, Vault, Quest 등 서비스 이름을 브랜드 스타일로 렌더링
 * - Cinzel 폰트 + 각 서비스 고유 컬러/그라디언트
 * - 사이트 전체에서 일관된 브랜드 표현 유지
 */

interface BrandTextProps {
  /** 렌더링할 브랜드 이름 (등록된 키 또는 확장 가능한 string) */
  brand: 'pompcore' | 'vault' | 'quest' | 'academy' | (string & {});
  /** 텍스트 크기 (Tailwind text-* 클래스) */
  size?: string;
  /** 추가 클래스 */
  className?: string;
}

/** 브랜드별 스타일 설정 */
const BRAND_STYLES: Record<string, { text: string; gradient?: string; label: string }> = {
  pompcore: {
    text: '',
    gradient: 'bg-gradient-to-r from-[#C8A0FF] via-[#FFD700] to-[#FF90D0] bg-clip-text text-transparent',
    label: 'POMPCORE',
  },
  vault: {
    text: 'text-[#10B981] dark:text-[#34D399]',
    label: 'VAULT',
  },
  quest: {
    text: 'text-[#7C3AED] dark:text-[#C084FC]',
    label: 'QUEST',
  },
  academy: {
    text: 'text-[#FBBF24] dark:text-[#FCD34D]',
    label: 'ACADEMY',
  },
};

export default function BrandText({ brand, size = 'text-lg', className = '' }: BrandTextProps) {
  const style = BRAND_STYLES[brand] ?? BRAND_STYLES.pompcore;

  return (
    <span
      className={`font-display font-bold tracking-wide ${size} ${style.gradient ?? style.text} ${className}`}
    >
      {style.label}
    </span>
  );
}

/**
 * PompCore 로고 텍스트 (POMP + CORE 분리 표기)
 * - Header 등에서 로고 텍스트로 사용
 */
export function PompCoreLogo({ size = 'text-xl', className = '' }: { size?: string; className?: string }) {
  return (
    <span className={`font-display font-bold tracking-wide ${size} ${className}`}>
      <span className="text-navy dark:text-white">POMP</span>
      <span className="text-gradient">CORE</span>
    </span>
  );
}
