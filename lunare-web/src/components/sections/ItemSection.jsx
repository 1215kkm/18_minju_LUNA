import { ITEMS } from '../../constants'
import item1 from '../../assets/images/main/item_1.png'
import item2 from '../../assets/images/main/item_2.png'
import item3 from '../../assets/images/main/item_3.png'
import item4 from '../../assets/images/main/item_4.png'

const ITEM_IMGS = [item1, item2, item3, item4]

function ItemCard({ item, img }) {
  return (
    <div className="item-card group relative flex flex-col items-center cursor-pointer">
      {/* 이미지 영역 */}
      <div
        className="relative overflow-hidden mb-6 w-full"
        style={{ background: item.shade, aspectRatio: '1/1' }}
      >
        <img
          src={img}
          alt={item.name}
          className="w-full h-full object-contain p-8 transition-transform duration-700 group-hover:scale-105"
        />
        {/* 호버 오버레이 */}
        <div className="overlay absolute inset-0 bg-black/35 flex items-end justify-center pb-7">
          <span className="font-pretendard text-[10px] tracking-[0.28em] text-white uppercase border border-white/60 px-5 py-2.5 hover:bg-white hover:text-[#1a1a1a] transition-colors duration-300">
            Shop Now
          </span>
        </div>
      </div>

      {/* 영문명 */}
      <p className="font-pretendard text-[10px] tracking-[0.18em] text-[#1a1a1a] uppercase mb-1 font-light text-center">
        {item.name}
      </p>
      <p className="font-pretendard text-[10px] text-[#1a1a1a] font-light mb-3 text-center">
        {item.nameKo}
      </p>
      <div className="w-5 h-px bg-[#c8c4d0] mb-3" />
      <p className="font-pretendard text-[11px] leading-[1.8] text-[#9a94a5] font-light text-center whitespace-pre-line">
        {item.desc}
      </p>
    </div>
  )
}

function ItemSection() {
  return (
    <section
      id="new-in"
      className="flex flex-col justify-start px-12 md:px-20 lg:px-28 xl:px-40 pt-[220px] pb-10"
      style={{ background: '#F1EEF1', scrollSnapAlign: 'center', minHeight: '88vh' }}
    >
      {/* 헤딩 — GFS Didot */}
      <h2 className="font-didot text-[20px] md:text-[24px] font-normal text-[#1a1a1a] tracking-[0.02em] mb-10">
        This Week's New
      </h2>

      {/* 아이템 그리드 */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
        {ITEMS.map((item, i) => (
          <ItemCard key={item.id} item={item} img={ITEM_IMGS[i]} />
        ))}
      </div>
    </section>
  )
}

export default ItemSection
