import { useState, useEffect, useRef } from 'react'
import smallLogo from '../../assets/images/main/small_logo.webp'

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
  const [menuClosing, setMenuClosing] = useState(false)
  const [shopOpen, setShopOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [hash, setHash] = useState(typeof window !== 'undefined' ? window.location.hash : '')
  const isDark = tone === 'auto' ? autoDark : tone === 'dark'
  const isMainPage = hash === '' || hash === '#'

  useEffect(() => {
    const onHashChange = () => setHash(window.location.hash)
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  const prevMenuOpen = useRef(false)
  useEffect(() => {
    if (menuOpen) {
      setMenuClosing(false)
      prevMenuOpen.current = true
      return
    }
    if (prevMenuOpen.current) {
      setMenuClosing(true)
      const t = setTimeout(() => setMenuClosing(false), 520)
      prevMenuOpen.current = false
      return () => clearTimeout(t)
    }
  }, [menuOpen])

  useEffect(() => {
    const onScroll = () => {
      const winY = window.scrollY || 0
      const container = document.querySelector('.snap-container')
      const containerY = container ? container.scrollTop : 0
      setScrolled(winY > 4 || containerY > 4)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true, capture: true })
    return () => window.removeEventListener('scroll', onScroll, { capture: true })
  }, [])

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

  const headerBgClass = (menuOpen || menuClosing || isMainPage)
    ? ''
    : scrolled
      ? headerOnDark
        ? 'bg-[#17141a]/45 backdrop-blur-md'
        : 'bg-white/75 backdrop-blur-md'
      : ''

  return (
    <header
      className={`pointer-events-none fixed left-0 right-0 top-0 z-50 transition-colors duration-300 ${headerBgClass}`}
      style={{ height: 'var(--header-h)' }}
    >
      <div className="pointer-events-auto relative z-50 max-w-[1920px] mx-auto h-full flex items-center justify-between px-5 md:px-12">

        {/* 좌측 — 햄버거 + SHOP */}
        <div className={`flex items-center gap-7 transition-colors duration-500 ${textColor}`}>
          <button
            type="button"
            className="hover:opacity-50 transition-opacity"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => {
              setMenuOpen((open) => !open)
              setShopOpen(false)
            }}
          >
            {menuOpen ? (
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <line x1="3" y1="3" x2="19" y2="19" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                <line x1="19" y1="3" x2="3" y2="19" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="22" height="16" viewBox="0 0 22 16" fill="none">
                <line x1="0" y1="1"  x2="22" y2="1"  stroke="currentColor" strokeWidth="1.4"/>
                <line x1="0" y1="8"  x2="22" y2="8"  stroke="currentColor" strokeWidth="1.4"/>
                <line x1="0" y1="15" x2="22" y2="15" stroke="currentColor" strokeWidth="1.4"/>
              </svg>
            )}
          </button>
          <div className="relative">
            <button
              type="button"
              className="font-pretendard flex items-center gap-1.5 text-[15px] font-light tracking-[0.06em] hover:opacity-50 transition-opacity"
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
                    className="font-pretendard text-[16px] font-light tracking-[0.08em] text-[#3a3540] transition-opacity hover:opacity-55"
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
              className="h-[20px] w-auto object-contain md:h-[23px]"
              style={{ filter: logoFilter }}
            />
          </a>
        )}

        {/* 우측 — 로그인 + 장바구니 */}
        <div className={`flex items-center gap-4 transition-colors duration-500 md:gap-6 ${rightTextColor}`}>
          <a
            href="#/login"
            className="font-pretendard hidden items-center text-[15px] font-light tracking-[0.06em] hover:opacity-50 transition-opacity sm:flex"
            onClick={closeMenus}
          >
            로그인
          </a>
          <a
            href="#/cart"
            className="font-pretendard text-[15px] font-light tracking-[0.06em] hover:opacity-50 transition-opacity"
            onClick={closeMenus}
          >
            장바구니
          </a>
        </div>

      </div>

      {/* Click-outside backdrop (invisible, closes menu) */}
      <div
        className={`fixed inset-0 z-30 ${menuOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Drop column menu — narrow vertical panel, slides down from top */}
      <div
        className={`fixed bottom-0 left-0 top-0 z-40 w-[320px] bg-[#efebf3] shadow-[24px_0_60px_-30px_rgba(45,38,57,0.35)] transition-all duration-500 ease-out sm:w-[360px] ${
          menuOpen
            ? 'pointer-events-auto translate-y-0 opacity-100'
            : 'pointer-events-none -translate-y-[100vh] opacity-0'
        }`}
        aria-hidden={!menuOpen}
      >
        <div className="px-7 pb-10 pt-[calc(var(--header-h)+4vh)] sm:px-9 sm:pb-12">
          <nav className="flex flex-col">
            {mainMenuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="group grid grid-cols-[1fr_auto] items-baseline gap-4 border-b border-[#d8d2e0] py-4 transition-colors hover:border-[#7a7388] sm:py-5"
                onClick={closeMenus}
              >
                <span className="font-didot text-[20px] font-normal leading-none text-[#17141a] transition-transform duration-300 group-hover:translate-x-1 sm:text-[24px]">
                  {item.label}
                </span>
                <span className="text-right font-pretendard text-[9px] font-light uppercase tracking-[0.24em] text-[#9a93a5] sm:text-[10px]">
                  {item.sub}
                </span>
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
