# 개발 완료 목록

## v0.3.0 (2026-03-04)

- [x] 패치노트 페이지 (/patchnotes) - 자동 데이터 반영
- [x] 공지사항 페이지 (/announcements) - 고정 공지, 카테고리, 펼치기/접기
- [x] WCAG 2.1 AA 접근성 (skip-nav, aria, focus-visible)
- [x] 한국어 UX 최적화 (Pretendard, keep-all, 행간 1.75)
- [x] prefers-reduced-motion 지원
- [x] 다크 모드 텍스트 오프화이트 전환
- [x] 버튼 최소 터치 타겟 44px
- [x] index.html SEO 기본 (lang, description, title)
- [x] Supabase 미설정 시 방어적 처리 (빈 화면 버그 수정)

## v0.2.0 (2026-03-04)

- [x] 라이트 테마 기본값 전환 (다크 전용 → 라이트 기본 + 다크 모드)
- [x] 다크 모드 토글 (themeStore + Header 버튼)
- [x] Navy 컬러 팔레트 추가 (로고 색상 기반)
- [x] 카드 스타일 이원화 (라이트: 화이트+섀도우, 다크: 글래스모피즘)
- [x] SVG 로고 통합 (pompcore, vault, quest)
- [x] 전체 컴포넌트 라이트/다크 듀얼 모드 적용
- [x] 전체 페이지 라이트/다크 듀얼 모드 적용
- [x] Project 타입 확장 (logoSrc 필드)
- [x] 프로젝트 이식용 템플릿 3종 (docs/templates/)
- [x] 비즈니스 전략 문서화 (AdSense, Polar, Clarity, SEO/GEO)

## v0.1.1 (2026-03-04)

- [x] 메인 페이지 FeaturesSection (서비스 소개, 핵심 가치 4개 카드)
- [x] 메인 페이지 CtaBanner (회원가입 유도 CTA 영역)
- [x] Home 페이지 4단 섹션 구조 확립 (Hero → Features → Projects → CTA)

## v0.1.0 (2026-03-04)

- [x] 프로젝트 기초 구조 (React + TS + Vite + Tailwind)
- [x] PompCore 브랜드 디자인 시스템 (컬러, 애니메이션, 글래스모피즘)
- [x] 공통 UI 컴포넌트 (Button, GlassCard, ProjectCard)
- [x] 레이아웃 시스템 (Header, Footer, Layout)
- [x] 페이지 골격 (Home, Projects, About, Login, Register)
- [x] Supabase 기반 SSO 인증 구조 (authService, authStore)
- [x] 프로젝트 데이터 시스템 (Vault, Quest 등록)
- [x] SPA 라우팅 (react-router-dom)
- [x] 환경변수 분리 (.env, .env.example)
