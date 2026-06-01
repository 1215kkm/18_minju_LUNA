import { useState, useEffect, useRef } from 'react'
import right1 from '../../assets/images/main/section01_right1.webp'
import right2 from '../../assets/images/main/section01_right2.webp'

const SLIDES = [right1, right2]
// 마지막에 첫 슬라이드 클론 추가 → 항상 왼쪽으로만 이동
const LOOP_SLIDES = [...SLIDES, SLIDES[0]]

function Section01() {
  const [index, setIndex] = useState(0)
  const [animated, setAnimated] = useState(true)
  const realIndex = index % SLIDES.length
  const timerRef = useRef(null)

  const advance = () => {
    setAnimated(true)
    setIndex((prev) => prev + 1)
  }

  useEffect(() => {
    timerRef.current = setInterval(advance, 3500)
    return () => clearInterval(timerRef.current)
  }, [])

  // 클론(마지막)에 도달하면 트랜지션 없이 진짜 첫 슬라이드로 순간 이동
  useEffect(() => {
    if (index === LOOP_SLIDES.length - 1) {
      const id = setTimeout(() => {
        setAnimated(false)
        setIndex(0)
      }, 700)
      return () => clearTimeout(id)
    }
  }, [index])

  const pct = 100 / LOOP_SLIDES.length

  return (
    <section
      id="about"
      className="snap-section flex"
      style={{ background: '#FDFDFD' }}
    >
      {/* 좌측 텍스트 */}
      <div className="w-full md:w-1/2 flex flex-col items-center justify-end text-center px-16 md:px-24 lg:px-32 pb-[178px]">
        <h2 className="font-didot text-[24px] md:text-[28px] lg:text-[32px] font-normal text-[#1a1a1a] tracking-[0.04em] mb-4 leading-snug">
          Light, In Its Softest Form
        </h2>
        <p className="font-didot text-[12px] leading-[2] text-[#888190] font-normal max-w-[420px]">
          A delicate veil of radiance inspired by the quiet beauty of moonlight.
        </p>
      </div>

      {/* 우측 이미지 슬라이더 */}
      <div className="hidden md:block w-1/2 h-full relative overflow-hidden">
        <div
          className="flex h-full"
          style={{
            width: `${LOOP_SLIDES.length * 100}%`,
            transform: `translateX(-${index * pct}%)`,
            transition: animated ? 'transform 700ms ease-in-out' : 'none',
          }}
        >
          {LOOP_SLIDES.map((src, i) => (
            <img
              key={i}
              src={src}
              alt=""
              className="h-full object-cover object-center"
              style={{ width: `${pct}%` }}
            />
          ))}
        </div>
        {/* 도트 인디케이터 */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
          {SLIDES.map((_, i) => (
            <span
              key={i}
              className={`block rounded-full transition-all duration-500 ${
                i === realIndex ? 'w-6 h-1.5 bg-white' : 'w-1.5 h-1.5 bg-white/40'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Section01
