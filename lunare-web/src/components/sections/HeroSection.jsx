import { useEffect, useRef } from 'react'
import logoImg from '../../assets/images/main/logo_img.webp'
import heroLeft from '../../assets/images/main/hero_left.webp'
import heroRight from '../../assets/images/main/hero_right.webp'

function HeroSection() {
  const logoWrapRef = useRef(null)
  const readyRef = useRef(false)
  const rafRef = useRef(null)

  useEffect(() => {
    const timer = setTimeout(() => { readyRef.current = true }, 1000)

    const container = document.querySelector('.snap-container')
    if (!container) return

    const handleScroll = () => {
      if (!readyRef.current) return
      if (rafRef.current) return  // 이미 프레임 예약됨

      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = null
        if (!logoWrapRef.current) return
        const progress = Math.min(container.scrollTop / container.clientHeight, 1)
        const scale = 1 + Math.pow(progress, 0.6) * 4
        const opacity = Math.max(0, 1 - Math.pow(progress / 0.8, 2.5))
        logoWrapRef.current.style.transform = `scale(${scale})`
        logoWrapRef.current.style.opacity = String(opacity)
      })
    }

    container.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      clearTimeout(timer)
      cancelAnimationFrame(rafRef.current)
      container.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <section id="hero" className="snap-section relative w-full">
      {/* 배경 이미지 — 모바일: 단일, 데스크탑: 좌우 2분할 */}
      <div className="absolute inset-0 flex">
        <div className="hidden md:block w-1/2 h-full overflow-hidden">
          <img src={heroLeft} alt="" className="w-full h-full object-cover object-center" fetchpriority="high" decoding="async" />
        </div>
        <div className="w-full md:w-1/2 h-full overflow-hidden">
          <img src={heroRight} alt="" className="w-full h-full object-cover object-center" fetchpriority="high" decoding="async" />
        </div>
      </div>

      {/* 미묘한 오버레이 */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-black/10 pointer-events-none" />

      {/* LUNARÉ 로고 — 스크롤 시 확대·페이드아웃 */}
      <div
        ref={logoWrapRef}
        className="absolute inset-x-0 pointer-events-none"
        style={{ bottom: '60px', transformOrigin: 'center bottom', willChange: 'transform, opacity' }}
      >
        <img
          src={logoImg}
          alt="LUNARÉ"
          className="logo-animate w-[78vw] md:w-[58vw] max-w-[1100px] mx-auto object-contain select-none"
          style={{ opacity: 0 }}
        />
      </div>

      {/* 하단 스크롤 힌트 */}
      <div className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50">
        <div className="w-px h-8 bg-white/35 animate-pulse" />
      </div>
    </section>
  )
}

export default HeroSection
