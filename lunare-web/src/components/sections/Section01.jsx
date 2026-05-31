import { useAutoSlide } from '../../hooks/useAutoSlide'
import right1 from '../../assets/images/main/section01_right1.webp'
import right2 from '../../assets/images/main/section01_right2.webp'

const SLIDES = [right1, right2]

function Section01() {
  const { current, key } = useAutoSlide(SLIDES.length, 3500)

  return (
    <section
      id="about"
      className="snap-section flex"
      style={{ background: '#FDFDFD' }}
    >
      {/* 좌측 텍스트 — 수직·수평 중앙 */}
      <div className="w-full md:w-1/2 flex flex-col items-center justify-end text-center px-16 md:px-24 lg:px-32 pb-[178px]">
        {/* GFS Didot 타이틀 */}
        <h2 className="font-didot text-[24px] md:text-[28px] lg:text-[32px] font-normal text-[#1a1a1a] tracking-[0.04em] mb-4 leading-snug">
          Light, In Its Softest Form
        </h2>

        <p className="font-didot text-[12px] leading-[2] text-[#888190] font-normal max-w-[420px]">
          A delicate veil of radiance inspired by the quiet beauty of moonlight.
        </p>
      </div>

      {/* 우측 이미지 슬라이더 */}
      <div className="hidden md:block w-1/2 h-full relative overflow-hidden">
        <img
          key={key}
          src={SLIDES[current]}
          alt=""
          className="slide-enter absolute inset-0 w-full h-full object-cover object-center"
        />
        {/* 도트 인디케이터 */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
          {SLIDES.map((_, i) => (
            <span
              key={i}
              className={`block rounded-full transition-all duration-500 ${
                i === current ? 'w-6 h-1.5 bg-white' : 'w-1.5 h-1.5 bg-white/40'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Section01
