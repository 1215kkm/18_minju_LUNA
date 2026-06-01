# LUNARÉ 웹사이트 제작 기록

## 프로젝트 개요

**LUNARÉ**는 하이라이터 뷰티 브랜드의 브로셔형 웹사이트입니다.  
쇼핑몰 기능보다는 브랜드 감성과 제품을 소개하는 데 초점을 두었으며,  
React + Vite + Tailwind CSS로 제작하고 GitHub Pages로 배포합니다.

- **URL**: GitHub Pages (`/LUNARE/`)
- **스택**: React, Vite, Tailwind CSS, Lenis (스무스 스크롤)
- **배포**: main 브랜치 push → GitHub Actions 자동 배포

---

## 제작 과정 타임라인

### 1단계 — 초기 세팅 및 메인 페이지 완성 (2026-05-30)

**커밋**: `Initial commit: LUNARÉ website with all sections and UI refinements`

처음부터 완성도 있는 메인 페이지를 목표로 시작.  
주요 구성 섹션:

- **HeroSection** — 브랜드 첫인상, 좌우 이미지 + 중앙 타이틀 레이아웃
- **Section01** — 하이라이터 소개 슬라이더 (이미지 전환 애니메이션)
- **ItemSection** — 제품 4종 그리드 (item_1~4)
- **BestCollectionSection** — 베스트 컬렉션 강조 섹션
- **FullTitleSection** — 대형 타이포그래피 풀스크린 섹션
- **Footer** — 브랜드 로고, 소셜 링크, 저작권

Tailwind CSS로 전체 스타일링, 컴포넌트별 분리 구조로 설계.

---

### 2단계 — GitHub Pages 배포 환경 구축 (2026-05-31 새벽)

**커밋**: `Add GitHub Actions deploy workflow and set Vite base path for GitHub Pages`

#### 문제
GitHub Pages는 SPA(Single Page Application)의 클라이언트 라우팅을 지원하지 않음.  
`/product/1` 같은 경로로 직접 접근하면 404 오류 발생.

#### 해결
- **hash 라우팅** 방식 채택: `#/product/1` 형태로 URL 구성
- `vite.config.js`에 `base: '/LUNARE/'` 설정
- `.github/workflows/deploy.yml` 작성으로 자동 배포 파이프라인 구성

---

### 3단계 — Lenis 스무스 스크롤 & 애니메이션 (2026-05-31)

**커밋**: `feat: smooth scroll with Lenis, refined animations and timing`

- Lenis 라이브러리 도입으로 부드러운 스크롤 경험 구현
- 섹션별 등장 애니메이션 타이밍 조정
- 스크롤 스냅 동작 개선

---

### 4단계 — 제품 상세 페이지 & 서브 페이지 구축 (2026-05-31)

**커밋**: `Add LUNARE product detail pages`, `fix: use hash routing for product pages`

제품 4종 각각의 상세 페이지 추가.

#### 버그: 제품 상세 페이지 라우팅 오류
직접 URL 접근 시 흰 화면 또는 404 발생.

**원인**: React Router의 BrowserRouter 사용 — GitHub Pages에서 경로 처리 불가.  
**수정**: HashRouter로 전환, 모든 내부 링크를 `#/` 형태로 변경.

---

### 5단계 — 로그인 / 회원가입 페이지 (2026-05-31)

**커밋**: `feat: add login/signup pages and UX fixes`

- `LoginPage.jsx`, `SignupPage.jsx` 신규 추가
- 헤더에 로그인 버튼 연결
- UX 개선사항 반영 (버튼 상태, 입력 피드백 등)

---

### 6단계 — 하이라이터 샵 & 제품 상세 완성 (2026-06-01)

**커밋**: `Build highlighter shop and product detail pages`, `Refine shop page hero and compact subpage footer`

- **HighlighterShopPage** — 제품 그리드 목록 + 필터 영역
- **ProductDetailPage** — 제품 이미지 갤러리, 색상 선택, 상세 설명
- 서브 페이지용 간결한 Footer 컴포넌트 분리
- 샵 히어로 이미지 영역 레이아웃 개선

---

### 7단계 — 브랜드 페이지 & 헤더 네비게이션 (2026-06-01)

**커밋**: `Add brand page and header navigation`, `Add brand story page`

- **BrandPage** — 브랜드 스토리, 철학, 비하인드 컨텐츠
- 헤더에 전체 내비게이션 메뉴 추가 (홈 / 샵 / 브랜드 / 카트)
- 모바일 메뉴 햄버거 버튼 구현

---

### 8단계 — 장바구니 페이지 (2026-06-01)

**커밋**: `Add cart page`, `Improve cart, brand story, product gallery, and UI polish`

- **CartPage** — 담긴 상품 목록, 수량 조절, 합계 계산
- 브랜드 스토리 레이아웃 개선
- 제품 갤러리 이미지 표시 방식 개선
- 전반적인 UI 폴리싱

---

### 9단계 — 이미지 최적화 (2026-06-01)

**커밋**: `Convert all images to WebP for faster loading`

#### 문제
PNG 원본 이미지 파일이 크고 로딩이 느림.

#### 해결
- 전체 이미지 WebP 포맷으로 일괄 변환 (105개 파일)
- 평균 파일 크기 30~50% 감소
- `HeroSection`, `ItemSection`, `Section01` 등 이미지 경로 업데이트

---

### 10단계 — 카트 기능 고도화 (2026-06-01)

**커밋**: `Add cart functionality with add-to-cart modal`

#### 문제
제품 상세 페이지에서 '장바구니 담기' 버튼이 동작하지 않음.

#### 해결
- **CartContext** (`context/CartContext.jsx`) 신규 생성 — React Context로 전역 카트 상태 관리
- `ProductDetailPage`에서 `addToCart` 함수 연결
- 담기 성공 시 모달 팝업으로 피드백 제공
- `CartPage`에서 Context 데이터 렌더링으로 전환 (기존 하드코딩 제거)

---

### 11단계 — 타이포그래피 & 슬라이더 개선 (2026-06-01)

여러 커밋을 통해 세부 UI 다듬기 진행.

#### Section01 슬라이더 방향 버그
**커밋**: `Change Section01 image transition to horizontal slide`, `Make Section01 slider always move in one direction (left)`

- **버그**: 슬라이더 이미지가 좌우 번갈아 방향 전환되는 문제 (역방향 슬라이드)
- **수정**: 항상 왼쪽 방향으로만 이동하는 단방향 슬라이드로 변경

#### 폰트 크기 가독성 개선
**커밋**: `Increase ItemSection font sizes for readability`, `Increase BestCollectionSection font sizes with 12px base`

- 제품명, 설명 텍스트 폰트 크기 상향
- 12px 기반 타이포그래피 스케일 적용

---

### 12단계 — 최종 타이포그래피 & 카트 모달 복구 (2026-06-01)

**커밋**: `Improve typography scale and restore cart modal flow`

- 전체 타이포그래피 스케일 재조정
- `ProductDetailPage` 카트 담기 → 모달 → 카트 이동 흐름 복구
- `SignupPage` 레이아웃 개선

---

## 버그 기록 요약

| 버그 | 원인 | 해결 |
|------|------|------|
| 제품 페이지 직접 접근 시 404 | BrowserRouter + GitHub Pages 미지원 | HashRouter로 전환 |
| 슬라이더가 좌우 번갈아 방향 전환 | 인덱스 계산 로직 오류 | 단방향(왼쪽) 슬라이드로 수정 |
| 장바구니 담기 버튼 미작동 | 전역 상태 없이 페이지 간 카트 데이터 미공유 | CartContext 도입 |
| 이미지 로딩 느림 | PNG 원본 대용량 파일 | WebP 일괄 변환 |
| 카트 모달 플로우 끊김 | Context 연결 후 모달 트리거 누락 | 모달 흐름 재연결 |

---

## 파일 구조

```
lunare-web/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.jsx       # 전체 네비게이션
│   │   │   ├── Footer.jsx       # 메인/서브 풋터
│   │   │   └── Layout.jsx
│   │   ├── pages/
│   │   │   ├── HighlighterShopPage.jsx
│   │   │   ├── ProductDetailPage.jsx
│   │   │   ├── BrandPage.jsx
│   │   │   ├── CartPage.jsx
│   │   │   ├── LoginPage.jsx
│   │   │   └── SignupPage.jsx
│   │   └── sections/            # 메인 페이지 섹션들
│   │       ├── HeroSection.jsx
│   │       ├── Section01.jsx
│   │       ├── ItemSection.jsx
│   │       ├── BestCollectionSection.jsx
│   │       └── FullTitleSection.jsx
│   ├── context/
│   │   └── CartContext.jsx      # 전역 카트 상태
│   └── styles/
│       └── globals.css
├── .github/workflows/
│   └── deploy.yml               # GitHub Pages 자동 배포
└── vite.config.js
```

---

## 기술 선택 이유

| 기술 | 이유 |
|------|------|
| React + Vite | 빠른 개발 환경, HMR 지원 |
| Tailwind CSS | 클래스 기반 스타일링으로 빠른 UI 작업 |
| Lenis | 네이티브 스크롤보다 부드러운 UX |
| Hash Routing | GitHub Pages SPA 배포 한계 우회 |
| WebP | PNG 대비 파일 크기 절감, 빠른 로딩 |
| React Context | 외부 라이브러리 없이 카트 전역 상태 관리 |
