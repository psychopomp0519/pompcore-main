# PompCore Changelog

모든 버전별 상세 패치노트는 [docs/patchnotes/](docs/patchnotes/) 폴더를 참조하세요.

## [0.1.1] - 2026-03-04

메인 페이지 섹션 구조 확립

- 서비스 소개 섹션 추가 (FeaturesSection) - 핵심 가치 4개 카드
- CTA 배너 섹션 추가 (CtaBanner) - 회원가입 유도 영역
- Home 페이지 4단 구성: Hero → Features → Projects → CTA

상세: [docs/patchnotes/v0.1.1.md](docs/patchnotes/v0.1.1.md)

## [0.1.0] - 2026-03-04

프로젝트 기초 구조 설정 (React + TS + Vite + Tailwind + Supabase)

- 브랜드 디자인 시스템 구축 (Indigo-Violet, 글래스모피즘)
- 공통 컴포넌트: Button, GlassCard, ProjectCard
- 레이아웃: Header (반응형), Footer, Layout
- 페이지: Home, Projects, About, Login, Register
- SSO 인증 골격: authService + authStore (Supabase Auth)
- 프로젝트 데이터: Vault (가계부), Quest (일정관리) 등록
- 환경변수 분리 (.env.example 제공)

상세: [docs/patchnotes/v0.1.0.md](docs/patchnotes/v0.1.0.md)
