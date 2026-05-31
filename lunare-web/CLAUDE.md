# LUNARE 프로젝트

## 프로젝트 성격
- 단순 브로셔형 웹사이트 (쇼핑몰 X, 앱 X)
- 확장 계획 없음, 복잡한 기능 추가 불필요
- React + Vite + Tailwind CSS

## 호스팅
- GitHub Pages (정적 파일 서버)
- 배포: main 브랜치 push → GitHub Actions 자동 배포
- base path: `/LUNARE/`

## 라우팅 규칙
- GitHub Pages는 SPA 경로를 지원하지 않으므로 **hash 라우팅** 사용
- 새 페이지 추가 시 `#/페이지명` 형태로
- 링크: `href="#/페이지명"` (절대경로 `/LUNARE/...` 사용 금지)

## 작업 시 주의사항
- SEO 최적화 불필요
- 과도한 상태관리, 라우팅 라이브러리 도입 불필요
- 배포 전 `npm run preview`로 정적 환경에서 확인
