import { ITEMS } from '../../constants'
import item1 from '../../assets/images/main/item_1.webp'
import item2 from '../../assets/images/main/item_2.webp'
import item3 from '../../assets/images/main/item_3.webp'
import item4 from '../../assets/images/main/item_4.webp'

const ITEM_IMGS = [item1, item2, item3, item4]

function ItemCard({ item, img }) {
  return (
    <a
      href={`#/product/${item.slug}`}
      className="item-card group relative flex flex-col items-center cursor-pointer"
    >
      {/* 이미지 영역 */}
      <div
        className="relative overflow-hidden mb-6 w-full"
        style={{ aspectRatio: '1/1' }}
      >
        <img
          src={img}
          alt={item.name}
          className="w-full h-full object-contain p-4 md:p-8 transition-transform duration-700 group-hover:scale-105"
        />
        {/* 호버 오버레이 */}
        <div className="overlay absolute inset-0 bg-black/35 flex items-end justify-center pb-5 md:pb-7">
          <span className="font-pretendard text-[9px] md:text-[10px] tracking-[0.22em] md:tracking-[0.28em] text-white uppercase border border-white/60 px-3 md:px-5 py-2 md:py-2.5 hover:bg-white hover:text-[#1a1a1a] transition-colors duration-300">
            Shop Now
          </span>
        </div>
      </div>

      {/* 영문명 */}
      <p className="font-pretendard text-[12px] md:text-[16px] tracking-[0.14em] md:tracking-[0.18em] text-[#1a1a1a] uppercase mb-1 font-light text-center">
        {item.name}
      </p>
      <p className="font-pretendard text-[11px] md:text-[14px] text-[#1a1a1a] font-light mb-2 md:mb-3 text-center">
        {item.nameKo}
      </p>
      <div className="w-5 h-px bg-[#c8c4d0] mb-2 md:mb-3" />
      <p className="font-pretendard text-[11px] md:text-[14px] leading-[1.8] text-[#9a94a5] font-light text-center whitespace-pre-line hidden md:block">
        {item.desc}
      </p>
    </a>
  )
}

function ItemSection() {
  return (
    <section
      id="new-in"
      className="snap-section flex flex-col justify-center"
      style={{ background: '#F1EEF1' }}
    >
      {/* 타이틀 */}
      <div className="pl-8 md:pl-16 lg:pl-32 xl:pl-40 mb-8 md:mb-12 mt-24 md:mt-0 md:-mt-[20px]">
        <h2 className="font-didot text-[26px] md:text-[30px] lg:text-[36px] font-normal text-[#1a1a1a] leading-[1.1]">
          This Week's New
        </h2>
      </div>

      {/* 아이템 그리드 */}
      <div className="px-5 md:px-12 lg:px-28 xl:px-40 pb-12 md:pb-0">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-8 lg:gap-12 w-full">
          {ITEMS.map((item, i) => (
            <ItemCard key={item.id} item={item} img={ITEM_IMGS[i]} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ItemSection
