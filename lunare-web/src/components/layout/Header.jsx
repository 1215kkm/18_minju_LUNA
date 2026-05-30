import { useState, useEffect } from 'react'

// 이미지(dark) 위 섹션 id 목록
const DARK_SECTIONS = ['hero', 'beauty']

function Header() {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    const container = document.querySelector('.snap-container')
    if (!container) return

    const sections = document.querySelectorAll('.snap-section[id]')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
            setIsDark(DARK_SECTIONS.includes(entry.target.id))
          }
        })
      },
      { root: container, threshold: 0.5 }
    )

    sections.forEach((sec) => observer.observe(sec))
    return () => observer.disconnect()
  }, [])

  const textColor = isDark ? 'text-white' : 'text-[#1a1a1a]'

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{ height: 'var(--header-h)' }}
    >
      <div className="max-w-[1920px] mx-auto h-full flex items-center justify-between px-8 md:px-12">

        {/* 좌측 — 햄버거 + SHOP */}
        <div className={`flex items-center gap-5 transition-colors duration-500 ${textColor}`}>
          <button className="hover:opacity-50 transition-opacity" aria-label="Menu">
            <svg width="22" height="16" viewBox="0 0 22 16" fill="none">
              <line x1="0" y1="1"  x2="22" y2="1"  stroke="currentColor" strokeWidth="1.4"/>
              <line x1="0" y1="8"  x2="22" y2="8"  stroke="currentColor" strokeWidth="1.4"/>
              <line x1="0" y1="15" x2="22" y2="15" stroke="currentColor" strokeWidth="1.4"/>
            </svg>
          </button>
          <button className="font-pretendard flex items-center gap-1.5 text-[13px] font-light tracking-[0.06em] hover:opacity-50 transition-opacity">
            SHOP
            <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
              <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        {/* 우측 — 로그인 + 장바구니 */}
        <div className={`flex items-center gap-6 transition-colors duration-500 ${textColor}`}>
          <button className="font-pretendard flex items-center gap-1.5 text-[13px] font-light tracking-[0.06em] hover:opacity-50 transition-opacity">
            로그인
            <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
              <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
            </svg>
          </button>
          <button className="font-pretendard text-[13px] font-light tracking-[0.06em] hover:opacity-50 transition-opacity">
            장바구니
          </button>
        </div>

      </div>
    </header>
  )
}

export default Header
