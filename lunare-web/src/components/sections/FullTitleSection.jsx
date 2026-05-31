import { useAutoSlide } from '../../hooks/useAutoSlide'
import fullImg1 from '../../assets/images/main/full_img01.png'
import fullImg2 from '../../assets/images/main/full_img02.png'

const SLIDES = [fullImg1, fullImg2]

function FullTitleSection() {
  const { current } = useAutoSlide(SLIDES.length, 4000)

  return (
    <section id="beauty" className="snap-section relative overflow-hidden">
      {/* 배경 슬라이드 */}
      {SLIDES.map((src, i) => (
        <img
          key={i}
          src={src}
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000"
          style={{ opacity: i === current ? 1 : 0 }}
        />
      ))}

      {/* 콘텐츠 — 좌하단 */}
      <div className="relative z-10 h-full flex flex-col justify-end px-16 md:px-24 lg:px-32 pb-20">
        {/* GFS Didot 타이틀 */}
        <h2 className="font-didot text-[26px] md:text-[32px] font-normal text-[#1a1a1a] tracking-[0.1em] mb-4 leading-tight">
          BEYOND THE LIGHT
        </h2>

        <p className="font-pretendard text-[12px] leading-[1.9] text-[#3a3540] font-light mb-7">
          피부 위를 스치는 빛을 넘어<br />
          당신만의 존재감을 완성하는 새로운 광채의 경험
        </p>

        {/* discover 버튼 — 검정 pill */}
        <div>
          <a
            href="#/brand"
            className="font-pretendard inline-flex items-center justify-center bg-[#1a1a1a] text-white text-[13px] tracking-[0.08em] font-light rounded-full px-7 py-3 hover:bg-[#3a3540] transition-colors duration-300"
          >
            discover
          </a>
        </div>
      </div>

      {/* 슬라이드 인디케이터 */}
      <div className="absolute bottom-8 right-14 md:right-20 flex gap-2 z-10">
        {SLIDES.map((_, i) => (
          <span
            key={i}
            className={`block rounded-full transition-all duration-500 ${
              i === current ? 'w-8 h-1 bg-[#1a1a1a]' : 'w-2 h-1 bg-[#1a1a1a]/30'
            }`}
          />
        ))}
      </div>
    </section>
  )
}

export default FullTitleSection
