import { useState, useEffect } from 'react'
import smallLogo from '../../assets/images/main/small_logo.png'

// 이미지(dark) 위 섹션 id 목록
const DARK_SECTIONS = ['hero', 'beauty']

const mainMenuItems = [
  { label: 'Brand Story', sub: 'LUNARE mood', href: '#/brand' },
  { label: 'About', sub: 'Who we are', href: '#/about' },
  { label: 'Ingredient', sub: 'What goes in', href: '#/ingredient' },
  { label: 'Contact', sub: 'Get in touch', href: '#/contact' },
]

const shopMenuItems = [
  { label: 'New', href: '#/shop/new' },
  { label: 'Best Sellers', href: '#/shop/best-sellers' },
  { label: 'All Products', href: '#/shop/all' },
  { label: 'Liquid', href: '#/shop/liquid' },
  { label: 'Balm', href: '#/shop/balm' },
]

function Header({ tone = 'auto', showLogo = true, rightTone, logoTone }) {
  const [autoDark, setAutoDark] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)
  const [shopOpen, setShopOpen] = useState(false)
  const isDark = tone === 'auto' ? autoDark : tone === 'dark'

  useEffect(() => {
    if (tone !== 'auto') return

    const container = document.querySelector('.snap-container')
    if (!container) return

    const sections = document.querySelectorAll('.snap-section[id]')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
            setAutoDark(DARK_SECTIONS.includes(entry.target.id))
          }
        })
      },
      { root: container, threshold: 0.5 }
    )

    sections.forEach((sec) => observer.observe(sec))
    return () => observer.disconnect()
  }, [tone])

  useEffect(() => {
    const closeOnEsc = (event) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
        setShopOpen(false)
      }
    }

    window.addEventListener('keydown', closeOnEsc)
    return () => window.removeEventListener('keydown', closeOnEsc)
  }, [])

  const closeMenus = () => {
    setMenuOpen(false)
    setShopOpen(false)
    const snapContainer = document.querySelector('.snap-container')
    if (snapContainer) snapContainer.scrollTo({ top: 0, behavior: 'auto' })
    window.scrollTo(0, 0)
  }

  const headerOnDark = isDark && !menuOpen
  const textColor = headerOnDark ? 'text-white' : 'text-[#1a1a1a]'
  const rightTextColor = rightTone ? (rightTone === 'dark' ? 'text-white' : 'text-[#1a1a1a]') : textColor
  const logoOnDark = logoTone ? logoTone === 'dark' : headerOnDark
  const logoFilter = logoOnDark ? 'brightness(0) invert(1)' : 'none'

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 pointer-events-none"
      style={{ height: 'var(--header-h)' }}
    >
      <div className="pointer-events-auto relative z-50 max-w-[1920px] mx-auto h-full flex items-center justify-between px-5 md:px-12">

        {/* 좌측 — 햄버거 + SHOP */}
        <div className={`flex items-center gap-5 transition-colors duration-500 ${textColor}`}>
          <button
            type="button"
            className="hover:opacity-50 transition-opacity"
            aria-label="Menu"
            aria-expanded={menuOpen}
            onClick={() => {
              setMenuOpen((open) => !open)
              setShopOpen(false)
            }}
          >
            <svg width="22" height="16" viewBox="0 0 22 16" fill="none">
              <line x1="0" y1="1"  x2="22" y2="1"  stroke="currentColor" strokeWidth="1.4"/>
              <line x1="0" y1="8"  x2="22" y2="8"  stroke="currentColor" strokeWidth="1.4"/>
              <line x1="0" y1="15" x2="22" y2="15" stroke="currentColor" strokeWidth="1.4"/>
            </svg>
          </button>
          <div className="relative">
            <button
              type="button"
              className="font-pretendard flex items-center gap-1.5 text-[13px] font-light tracking-[0.06em] hover:opacity-50 transition-opacity"
              aria-label="Shop categories"
              aria-expanded={shopOpen}
              onClick={() => {
                setShopOpen((open) => !open)
                setMenuOpen(false)
              }}
            >
              SHOP
              <svg
                width="10"
                height="6"
                viewBox="0 0 10 6"
                fill="none"
                className={`transition-transform duration-300 ${shopOpen ? 'rotate-180' : ''}`}
              >
                <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
              </svg>
            </button>

            <div
              className={`absolute left-0 top-9 w-[178px] border border-[#ded8e5]/80 bg-[#fbfafc]/94 px-4 py-4 shadow-[0_18px_40px_rgba(69,60,82,0.12)] backdrop-blur-md transition-all duration-300 ${
                shopOpen ? 'translate-y-0 opacity-100' : 'pointer-events-none -translate-y-2 opacity-0'
              }`}
            >
              <nav className="flex flex-col gap-3">
                {shopMenuItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="font-pretendard text-[11px] font-light tracking-[0.08em] text-[#3a3540] transition-opacity hover:opacity-55"
                    onClick={closeMenus}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>

        {showLogo && (
          <a
            href="#/"
            aria-label="Go to LUNARÉ main page"
            className="pointer-events-auto absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300 hover:opacity-55"
            onClick={closeMenus}
          >
            <img
              src={smallLogo}
              alt="LUNARÉ"
              className="h-[13px] w-auto object-contain md:h-[15px]"
              style={{ filter: logoFilter }}
            />
          </a>
        )}

        {/* 우측 — 로그인 + 장바구니 */}
        <div className={`flex items-center gap-4 transition-colors duration-500 md:gap-6 ${rightTextColor}`}>
          <a
            href="#/login"
            className="font-pretendard hidden items-center text-[13px] font-light tracking-[0.06em] hover:opacity-50 transition-opacity sm:flex"
            onClick={closeMenus}
          >
            로그인
          </a>
          <a
            href="#/cart"
            className="font-pretendard text-[13px] font-light tracking-[0.06em] hover:opacity-50 transition-opacity"
            onClick={closeMenus}
          >
            장바구니
          </a>
        </div>

      </div>

      <div
        className={`pointer-events-auto fixed left-5 top-[calc(var(--header-h)+14px)] z-40 w-[calc(100vw-40px)] max-w-[390px] border border-[#ded8e5]/80 bg-[#fbfafc]/94 px-5 py-5 text-[#29242d] shadow-[0_22px_52px_rgba(69,60,82,0.14)] backdrop-blur-md transition-all duration-300 md:left-12 md:w-[430px] md:max-w-none md:px-7 md:py-6 ${
          menuOpen ? 'translate-y-0 opacity-100' : 'pointer-events-none -translate-y-3 opacity-0'
        }`}
      >
        <div className="mb-6 flex items-center justify-between border-b border-[#ded8e5] pb-4">
          <p className="font-pretendard text-[10px] font-light uppercase tracking-[0.24em] text-[#9a93a5]">
            LUNARÉ
          </p>
          <button
            type="button"
            className="font-pretendard text-[10px] font-light uppercase tracking-[0.18em] text-[#9a93a5] transition-colors hover:text-[#29242d]"
            onClick={() => setMenuOpen(false)}
          >
            Close
          </button>
        </div>

        <nav className="flex flex-col">
          {mainMenuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group grid grid-cols-[1fr_auto] items-center gap-8 border-b border-[#ded8e5]/75 py-5 md:py-6"
              onClick={closeMenus}
            >
              <span className="font-didot text-[25px] font-normal leading-none text-[#29242d] transition-transform duration-300 group-hover:translate-x-1 md:text-[29px]">
                {item.label}
              </span>
              <span className="max-w-[124px] text-right font-pretendard text-[9px] font-light uppercase leading-[1.8] tracking-[0.14em] text-[#aaa3b1]">
                {item.sub}
              </span>
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Header
