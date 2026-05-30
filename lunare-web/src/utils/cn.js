// 조건부 클래스 조합 유틸
export function cn(...classes) {
  return classes.filter(Boolean).join(' ')
}
