import { useState, useEffect, useRef } from 'react'
import { BEST_COLLECTION } from '../../constants'
import detail1 from '../../assets/images/main/detail_01.webp'
import detail2 from '../../assets/images/main/detail_02.webp'
import detail3 from '../../assets/images/main/detail_03.webp'
import detail4 from '../../assets/images/main/detail_04.webp'

const DETAIL_IMGS = [detail1, detail2, detail3, detail4]

function BestCollectionSection() {
  const [activeIdx, setActiveIdx] = useState(0)
  const isHoveringRef = useRef(false)
  const timerRef = useRef(null)

  useEffect(() => {
    const start = () => {
      timerRef.current = setInterval(() => {
        if (!isHoveringRef.current) {
          setActiveIdx((prev) => (prev + 1) % BEST_COLLECTION.length)
        }
      }, 3500)
    }
    start()
    return () => clearInterval(timerRef.current)
  }, [])

  const handleMouseEnter = (i) => {
    isHoveringRef.current = true
    setActiveIdx(i)
  }

  const handleMouseLeave = () => {
    isHoveringRef.current = false
  }

  return (
    <section
      id="collection"
      className="snap-section flex flex-col justify-center"
      style={{ background: '#FDFDFD' }}
    >
      {/* 타이틀 — 리스트 위 독립 배치 */}
      <div className="pl-16 md:pl-24 lg:pl-32 xl:pl-40 mb-12">
        <h2 className="font-didot text-[30px] md:text-[36px] font-normal text-[#1a1a1a] leading-[1.1]">
          Best<br />Collection
        </h2>
      </div>

      {/* 리스트 + 이미지 — 같은 flex row, 높이 완전히 일치 */}
      <div className="flex items-stretch">

        {/* 좌측 리스트 */}
        <ul className="flex flex-col justify-between pl-24 md:pl-36 lg:pl-48 xl:pl-56 pr-8 w-[50%]" onMouseLeave={handleMouseLeave}>
          {BEST_COLLECTION.map((item, i) => (
            <li
              key={item.id}
              className="flex items-start gap-12 cursor-pointer py-5"
              onMouseEnter={() => handleMouseEnter(i)}
            >
              <span className={`font-pretendard text-[14px] font-light w-8 flex-shrink-0 mt-1 transition-colors duration-300 ${
                activeIdx === i ? 'text-[#5a5560]' : 'text-[#ccc8d4]'
              }`}>
                {item.id}
              </span>
              <div className={`transition-transform duration-300 ${activeIdx === i ? 'translate-x-1' : ''}`}>
                <div className="flex items-baseline gap-3 mb-2">
                  <span className={`font-didot font-normal text-[#1a1a1a] tracking-[0.03em] transition-all duration-300 ${
                    activeIdx === i ? 'text-[20px] md:text-[23px]' : 'text-[18px] md:text-[21px]'
                  }`}>
                    {item.name}
                  </span>
                  <span className={`font-pretendard font-light transition-colors duration-300 ${
                    activeIdx === i ? 'text-[12px] text-[#7a7485]' : 'text-[12px] text-[#b0aab8]'
                  }`}>
                    {item.nameKo}
                  </span>
                </div>
                <p className={`font-pretendard text-[12px] tracking-[0.16em] uppercase mb-1 font-light transition-colors duration-300 ${
                  activeIdx === i ? 'text-[#5a5560]' : 'text-[#3a3540]'
                }`}>
                  {item.type}
                </p>
                <p className={`font-pretendard text-[12px] font-light transition-colors duration-300 ${
                  activeIdx === i ? 'text-[#7a7485]' : 'text-[#b0aab8]'
                }`}>
                  {item.typeKo}
                </p>
              </div>
            </li>
          ))}
        </ul>

        {/* 우측 이미지 — 좌측과 동일 높이, 오른쪽 끝까지 꽉 채움 */}
        <div className="hidden md:block flex-1 relative overflow-hidden">
          {DETAIL_IMGS.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={BEST_COLLECTION[i].name}
              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
              style={{ opacity: i === activeIdx ? 1 : 0 }}
            />
          ))}
        </div>

      </div>
    </section>
  )
}

export default BestCollectionSection
