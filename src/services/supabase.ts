/**
 * Supabase 클라이언트 설정
 * - 환경변수에서 URL과 키를 읽어 클라이언트 생성
 * - 모든 서비스 모듈에서 이 클라이언트를 import하여 사용
 * - .env 파일에 VITE_SUPABASE_URL, VITE_SUPABASE_ANON_KEY 필요
 */
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn(
    '[PompCore] Supabase 환경변수가 설정되지 않았습니다. .env 파일을 확인하세요.'
  );
}

export const supabase = createClient(supabaseUrl ?? '', supabaseAnonKey ?? '');
