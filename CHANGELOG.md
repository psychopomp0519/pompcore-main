# PompCore Changelog

모든 버전별 상세 패치노트는 [docs/patchnotes/](docs/patchnotes/) 폴더를 참조하세요.

## [0.3.0] - 2026-03-04

패치노트/공지사항 페이지 + UI/UX 접근성 개선

- 패치노트 페이지 (/patchnotes) - 버전별 변경 이력 타임라인
- 공지사항 페이지 (/announcements) - 고정 공지, 카테고리 배지, 펼치기/접기
- WCAG 2.1 AA 접근성: skip-nav, aria-current, aria-expanded, focus-visible
- 한국어 UX 최적화: Pretendard 폰트, word-break: keep-all, 행간 1.75
- prefers-reduced-motion 지원 (모션 감소 선호 사용자)
- 다크 모드 텍스트 오프화이트 전환 (눈 피로 감소)
- 버튼 최소 터치 타겟 44px 보장 (Apple HIG)
- index.html: lang="ko", meta description, 타이틀 변경
- Supabase 미설정 시 앱 크래시 방지 (방어적 처리)

상세: [docs/patchnotes/v0.3.0.md](docs/patchnotes/v0.3.0.md)

## [0.2.0] - 2026-03-04

라이트 테마 기반 디자인 리뉴얼 + 다크 모드 토글

- 라이트 테마 기본값 전환, Navy 컬러 팔레트 추가
- 다크 모드 토글 (themeStore + Header 🌙/☀️ 버튼)
- SVG 로고 통합 (pompcore, vault, quest)
- 전체 컴포넌트/페이지 라이트-다크 듀얼 모드 적용
- 프로젝트 이식용 템플릿 3종 추가 (docs/templates/)
- 비즈니스 전략 문서화 (AdSense, Polar, Clarity, SEO/GEO)

상세: [docs/patchnotes/v0.2.0.md](docs/patchnotes/v0.2.0.md)

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
