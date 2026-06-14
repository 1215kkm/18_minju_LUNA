import Header from '../layout/Header'
import Footer from '../layout/Footer'
import pearlImg from '../../assets/images/ingredient/pearl-mica.webp'
import squalaneImg from '../../assets/images/ingredient/squalane.webp'
import hyaluronicImg from '../../assets/images/ingredient/hyaluronic.webp'
import niacinamideImg from '../../assets/images/ingredient/niacinamide.webp'

const ingredients = [
  {
    num: '01',
    name: 'Pearl Mica',
    sub: '진주 미네랄',
    img: pearlImg,
    alt: 'Iridescent mineral powder particles suspended in soft diffused light',
    body: '천연 운모에서 추출한 미세 입자가 피부 위에 부드러운 반사광을 형성합니다. 입자가 가장 곱게 분쇄된 등급만을 선별해, 피부 결을 거스르지 않고 자연스럽게 머무릅니다.',
  },
  {
    num: '02',
    name: 'Squalane',
    sub: '식물성 스쿠알란',
    img: squalaneImg,
    alt: 'Translucent oil droplet spreading slowly across a smooth surface',
    body: '올리브 유래 스쿠알란이 피부 장벽을 매끄럽게 정돈하며, 광채가 더 오래 머무를 수 있도록 돕습니다. 끈적임 없이 빠르게 흡수되어 가벼운 마감을 완성합니다.',
  },
  {
    num: '03',
    name: 'Hyaluronic Acid',
    sub: '저분자 히알루론산',
    img: hyaluronicImg,
    alt: 'Fine water mist suspended in cool diffused light, ethereal moisture veil',
    body: '피부 표면의 수분 균형을 유지해 가루 들뜸 없이 자연스러운 마감을 만듭니다. 시간이 지나도 무너지지 않는 광채, 그 비결은 수분에 있습니다.',
  },
  {
    num: '04',
    name: 'Niacinamide',
    sub: '나이아신아마이드',
    img: niacinamideImg,
    alt: 'Smooth crystalline powder structure in raking side-light',
    body: '균일한 톤과 결을 위한 핵심 성분. 빛이 피부 위에 한쪽으로 치우치지 않고 균형 있게 분포되도록 도와, 더 정직한 광채를 만듭니다.',
  },
]

function IngredientPage() {
  return (
    <div className="min-h-screen bg-[#efebf3] text-[#17141a]">
      <Header tone="light" />

      <main>
        {/* 1) Hero — 풀와이드, bottom-align */}
        <section className="flex min-h-[60vh] flex-col justify-end px-8 pb-16 pt-[calc(var(--header-h)+10vh)] md:px-16 lg:px-[7vw]">
          <p className="mb-6 font-pretendard text-[9px] font-light uppercase tracking-[0.32em] text-[#7a7388]">
            Ingredient
          </p>
          <h1 className="font-didot text-[28px] font-normal leading-[1.15] tracking-[0.01em] text-[#17141a] sm:text-[36px] lg:text-[44px]">
            Formulated with Restraint
          </h1>
          <p className="mt-8 max-w-[520px] font-pretendard text-[14px] font-light leading-[1.95] text-[#3a3640] sm:text-[14.5px]">
            더 많이 넣지 않는 것. 그것이 LUNARÉ의 포뮬러 원칙입니다. 피부에 닿는 모든 성분에는 이유가 있어야 합니다.
          </p>
        </section>

        {/* 2~5) 챕터 × 4 — 50:50 교번 분할 (홀수 이미지 좌 / 짝수 이미지 우) */}
        {ingredients.map((ing, idx) => {
          const imageRight = idx % 2 === 1
          return (
            <section
              key={ing.name}
              className="grid grid-cols-1 lg:min-h-[70vh] lg:grid-cols-2"
            >
              <div className={`relative h-[55vh] lg:h-auto ${imageRight ? 'lg:order-2' : ''}`}>
                <img
                  src={ing.img}
                  alt={ing.alt}
                  loading={idx === 0 ? 'eager' : 'lazy'}
                  decoding="async"
                  className="absolute inset-0 h-full w-full object-cover object-center"
                />
              </div>

              <div className="flex items-center px-8 py-16 sm:px-12 sm:py-20 lg:px-[7vw] lg:py-12">
                <article>
                  <p className="mb-5 font-pretendard text-[9px] font-light uppercase tracking-[0.32em] text-[#7a7388]">
                    {ing.num}
                  </p>
                  <h2 className="font-didot text-[22px] font-normal leading-[1.15] tracking-[0.01em] text-[#17141a] sm:text-[28px] lg:text-[32px]">
                    {ing.name}
                  </h2>
                  <p className="mt-3 font-pretendard text-[10px] font-light uppercase tracking-[0.28em] text-[#7a7388]">
                    {ing.sub}
                  </p>
                  <p className="mt-6 max-w-[440px] font-pretendard text-[14px] font-light leading-[1.95] text-[#3a3640] sm:text-[14.5px]">
                    {ing.body}
                  </p>
                </article>
              </div>
            </section>
          )
        })}

      </main>

      <Footer compact />
    </div>
  )
}

export default IngredientPage
