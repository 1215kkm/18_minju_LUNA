import logoImg from '../../assets/images/main/logo_img.png'
import heroLeft from '../../assets/images/main/hero_left.png'
import heroRight from '../../assets/images/main/hero_right.png'

function HeroSection() {
  return (
    <section id="hero" className="snap-section relative w-full">
      {/* 배경 이미지 2분할 */}
      <div className="absolute inset-0 flex">
        <div className="w-1/2 h-full overflow-hidden">
          <img src={heroLeft} alt="" className="w-full h-full object-cover object-center" />
        </div>
        <div className="w-1/2 h-full overflow-hidden">
          <img src={heroRight} alt="" className="w-full h-full object-cover object-center" />
        </div>
      </div>

      {/* 미묘한 오버레이 */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-black/10 pointer-events-none" />

      {/* LUNARÉ 로고 — 하단에서 50px 위 */}
      <div className="absolute inset-x-0 pointer-events-none" style={{ bottom: '50px' }}>
        <img
          src={logoImg}
          alt="LUNARÉ"
          className="logo-animate w-[58vw] max-w-[1100px] mx-auto object-contain select-none"
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
