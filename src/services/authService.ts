/**
 * 인증 서비스 모듈
 * - Supabase Auth를 추상화하여 UI와 분리
 * - 향후 인증 방식이 변경되어도 이 파일만 수정하면 됨
 * - 모든 서브 프로젝트(Vault, Quest 등)에서 동일한 인터페이스 사용
 */
import { supabase } from './supabase';
import type { LoginRequest, RegisterRequest, UserProfile } from '../types/auth.types';

/** Supabase User → UserProfile 변환 */
function toUserProfile(user: { id: string; email?: string; user_metadata?: Record<string, unknown>; created_at?: string }): UserProfile {
  return {
    id: user.id,
    email: user.email ?? '',
    displayName: (user.user_metadata?.display_name as string) ?? null,
    avatarUrl: (user.user_metadata?.avatar_url as string) ?? null,
    createdAt: user.created_at ?? new Date().toISOString(),
  };
}

/** 이메일/비밀번호 로그인 */
export async function login({ email, password }: LoginRequest): Promise<UserProfile> {
  const { data, error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) throw new Error(error.message);
  if (!data.user) throw new Error('사용자 정보를 가져올 수 없습니다.');

  return toUserProfile(data.user);
}

/** 이메일/비밀번호 회원가입 */
export async function register({ email, password, displayName }: RegisterRequest): Promise<UserProfile> {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: { display_name: displayName },
    },
  });

  if (error) throw new Error(error.message);
  if (!data.user) throw new Error('회원가입에 실패했습니다.');

  return toUserProfile(data.user);
}

/** 로그아웃 */
export async function logout(): Promise<void> {
  const { error } = await supabase.auth.signOut();
  if (error) throw new Error(error.message);
}

/** 현재 세션의 사용자 정보 조회 */
export async function getCurrentUser(): Promise<UserProfile | null> {
  const { data: { user }, error } = await supabase.auth.getUser();

  if (error || !user) return null;
  return toUserProfile(user);
}

/** 인증 상태 변경 리스너 (앱 초기화 시 사용) */
export function onAuthStateChange(callback: (user: UserProfile | null) => void) {
  return supabase.auth.onAuthStateChange((_event, session) => {
    callback(session?.user ? toUserProfile(session.user) : null);
  });
}
