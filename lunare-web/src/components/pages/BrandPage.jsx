import Header from '../layout/Header'
import Footer from '../layout/Footer'
import logoImg from '../../assets/images/main/logo_img.png'
import heroLeft from '../../assets/images/main/hero_left.png'
import heroRight from '../../assets/images/main/hero_right.png'
import fullImg1 from '../../assets/images/main/full_img01.png'
import detail1 from '../../assets/images/main/detail_01.png'
import detail2 from '../../assets/images/main/detail_02.png'
import detail3 from '../../assets/images/main/detail_03.png'

const values = [
  {
    title: 'Soft Focus Light',
    text: '피부를 덮는 반짝임보다, 결 사이로 조용히 번지는 빛을 먼저 생각합니다.',
  },
  {
    title: 'Clear Layering',
    text: '얇게 겹쳐도 무겁지 않은 투명한 텍스처로 매일의 광채를 설계합니다.',
  },
  {
    title: 'Moonlit Mood',
    text: '차분한 색감과 낮은 온도의 펄감으로 고요하고 세련된 인상을 만듭니다.',
  },
]

function BrandPage() {
  return (
    <div className="min-h-screen bg-[#fbfafc] text-[#29242d]">
      <Header tone="light" />

      <main>
        <section className="relative isolate min-h-screen overflow-hidden pt-[var(--header-h)]">
          <div className="absolute inset-0 -z-20 grid grid-cols-2">
            <img src={heroLeft} alt="" className="h-full w-full object-cover" aria-hidden="true" />
            <img src={heroRight} alt="" className="h-full w-full object-cover" aria-hidden="true" />
          </div>
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(251,250,252,0.24),rgba(251,250,252,0.72)_64%,#fbfafc_100%)]" />

          <div className="mx-auto flex min-h-[calc(100vh-var(--header-h))] max-w-[1440px] flex-col justify-end px-6 pb-20 md:px-12 lg:px-20">
            <p className="mb-6 font-pretendard text-[10px] font-light uppercase tracking-[0.28em] text-[#5f5967]">
              Brand Story
            </p>
            <img src={logoImg} alt="LUNARÉ" className="mb-8 w-[min(62vw,680px)] object-contain" />
            <p className="max-w-[520px] font-didot text-[24px] font-normal leading-[1.42] text-[#2f2a34] md:text-[34px]">
              A quiet radiance inspired by the soft edge of moonlight.
            </p>
          </div>
        </section>

        <section className="mx-auto grid max-w-[1320px] gap-12 px-6 py-24 md:grid-cols-[minmax(0,0.9fr)_minmax(420px,1.1fr)] md:px-12 lg:px-20">
          <div className="max-w-[420px]">
            <p className="mb-5 font-pretendard text-[10px] font-light uppercase tracking-[0.24em] text-[#9a93a5]">
              Philosophy
            </p>
            <h1 className="font-didot text-[36px] font-normal leading-[1.08] text-[#2c2731] md:text-[52px]">
              Light, in its softest form.
            </h1>
          </div>

          <div className="font-pretendard text-[13px] font-light leading-[2] text-[#665f70]">
            <p>
              LUNARE는 피부 위에 남는 가장 부드러운 빛을 탐구합니다. 선명한 광보다 오래 머무는
              잔광, 화려한 컬러보다 깨끗하게 정돈되는 투명함, 그리고 매일의 얼굴에 자연스럽게
              스며드는 조용한 존재감을 지향합니다.
            </p>
            <p className="mt-7">
              제품은 밤, 리퀴드, 베이스의 경계를 유연하게 넘나들며 얇고 맑게 레이어링됩니다.
              달빛처럼 낮은 온도의 펄과 촉촉한 결이 만나, 피부가 안쪽에서 켜진 듯한 광채를
              완성합니다.
            </p>
          </div>
        </section>

        <section className="bg-[#f4f0f7]">
          <div className="mx-auto grid max-w-[1440px] gap-10 px-6 py-20 md:grid-cols-3 md:px-12 lg:px-20">
            {values.map((value) => (
              <article key={value.title} className="border-t border-[#d8d1df] pt-7">
                <h2 className="font-didot text-[25px] font-normal text-[#302b35]">{value.title}</h2>
                <p className="mt-5 font-pretendard text-[12px] font-light leading-[1.9] text-[#746d7d]">
                  {value.text}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto grid max-w-[1440px] gap-6 px-6 py-24 md:grid-cols-[1.18fr_0.82fr] md:px-12 lg:px-20">
          <div className="overflow-hidden">
            <img src={fullImg1} alt="LUNARE soft light mood" className="h-full min-h-[360px] w-full object-cover" />
          </div>
          <div className="grid gap-6">
            {[detail1, detail2, detail3].map((src, index) => (
              <div key={src} className="overflow-hidden bg-[#f7f4f8]">
                <img
                  src={src}
                  alt={`LUNARE texture mood ${index + 1}`}
                  className="h-[168px] w-full object-cover md:h-[190px]"
                />
              </div>
            ))}
          </div>
        </section>

        <section className="px-6 pb-24 text-center md:px-12">
          <p className="mx-auto max-w-[620px] font-didot text-[28px] font-normal leading-[1.35] text-[#2c2731] md:text-[42px]">
            Discover a collection made for quiet luminosity.
          </p>
          <a
            href="#/shop/all"
            onClick={() => window.scrollTo(0, 0)}
            className="mt-8 inline-flex h-11 items-center justify-center rounded-full bg-[#29252d] px-8 font-pretendard text-[11px] font-light uppercase tracking-[0.14em] text-white transition-opacity hover:opacity-80"
          >
            Shop collection
          </a>
        </section>
      </main>

      <Footer compact />
    </div>
  )
}

export default BrandPage
