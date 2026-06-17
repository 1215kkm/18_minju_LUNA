import Header from '../layout/Header'
import Footer from '../layout/Footer'
import aboutImg from '../../assets/images/about/about_img.webp'

const bodyBlocks = [
  `LUNARÉ는 빛과 피부가 만나는 가장 조용한 순간에서 시작되었습니다. 우리는 '광채'라는 단어를 다시 정의하고 싶었습니다. 화려하게 빛나는 것이 아니라, 피부 본연의 결을 따라 은은하게 머무는 빛. 그 작은 차이가 한 사람의 분위기를 바꾼다고 믿습니다.`,
  `우리는 트렌드가 아닌 무드를 만듭니다. 빠르게 소비되는 컬러가 아니라, 오래 곁에 두고 싶은 텍스처와 마감을 연구합니다. 매일의 루틴 안에서 잠깐 멈추게 되는 순간 — LUNARÉ는 그 순간에 머무는 브랜드가 되고자 합니다.`,
  `LUNARÉ가 약속하는 것은 단순합니다. 피부 위에 정직하게 머무는 빛, 그리고 자신만의 아름다움을 발견하는 매일의 루틴 — 우리는 그 시작이 되고자 합니다.`,
]

function AboutPage() {
  return (
    <div className="min-h-screen bg-[#f4ece0] text-[#17141a]">
      <Header tone="light" />

      <main>
        <section className="relative lg:flex lg:min-h-screen lg:flex-col lg:justify-end lg:overflow-hidden">
          {/* 이미지 — 모바일/태블릿: 스택, lg+: absolute 배경 */}
          <div className="relative aspect-[4/3] w-full overflow-hidden md:aspect-[16/9] lg:absolute lg:inset-0 lg:aspect-auto">
            <img
              src={aboutImg}
              alt="LUNARÉ campaign — soft daylight portrait on cream rug, strawberries arranged at frame edge"
              fetchpriority="high"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
          </div>

          {/* 가독성 그라디언트 — lg+에서만, 하단에서 위로 페이드 */}
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 hidden h-[75%] bg-gradient-to-t from-[#f4ece0] via-[#f4ece0]/92 via-40% to-transparent lg:block"
            aria-hidden="true"
          />

          {/* 텍스트 — 타이틀 블록 | 설명 블록, 세로 가운데 정렬 */}
          <div className="relative z-10 px-8 py-16 md:px-16 md:py-20 lg:px-[7vw] lg:pb-24 lg:pt-32">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] lg:items-center lg:gap-16">
              {/* 타이틀 블록 */}
              <div>
                <p className="font-pretendard text-[11px] font-light uppercase tracking-[0.32em] text-[#1e1b22]/70">
                  About
                </p>
                <h1 className="mt-5 font-didot text-[28px] font-normal leading-[1.1] tracking-[0.01em] text-[#17141a] sm:text-[36px] lg:text-[44px]">
                  Who We Are
                </h1>
                <p className="mt-4 font-pretendard text-[17px] font-medium leading-[1.65] text-[#1e1b22] sm:text-[18px]">
                  조용히 머무는 빛을 만드는 사람들.
                </p>
              </div>

              {/* 설명 블록 */}
              <div className="space-y-5 break-keep font-pretendard text-[16px] font-light leading-[1.78] text-[#3a3640] sm:text-[17px] lg:text-[18px]">
                {bodyBlocks.map((block) => (
                  <p key={block}>{block}</p>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer compact />
    </div>
  )
}

export default AboutPage
