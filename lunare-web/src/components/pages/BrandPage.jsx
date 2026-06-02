import Header from '../layout/Header'
import Footer from '../layout/Footer'
import brandImg from '../../assets/images/brand/brand_img.webp'
import brandBg from '../../assets/images/brand/brand_bg.webp'

const bodyBlocks = [
  `우리는 화려한 글리터나 과장된 광채가 아닌,
피부 본연의 결을 살리면서 자연스럽게 스며드는 빛을 연구해왔습니다.
달빛이 모든 것을 은은하게 비추듯,
LUNARÉ의 제품은 피부 위에 얇고 섬세한 광채를 더해 본연의 아름다움을 더욱 돋보이게 합니다.`,
  `하이라이터는 단순히 얼굴의 특정 부위를 밝히는 메이크업 제품이 아닙니다.
빛을 활용해 피부에 입체감을 부여하고, 자신만의 분위기와 무드를 완성하는 하나의 표현 방식입니다.`,
  `LUNARÉ는 이러한 철학을 바탕으로 투명한 텍스처와 섬세한 반사광,
피부에 자연스럽게 녹아드는 포뮬러를 개발하며 새로운 광채의 기준을 제안합니다.
달빛에서 영감을 받은 은은한 반사광, 유리처럼 맑은 윤기, 그리고 피부와 하나가 되는 자연스러운 광채.
우리는 빛이 가진 가장 아름다운 순간을 피부 위에 담아내기 위해 끊임없이 연구합니다.`,
]

function BrandPage() {
  return (
    <div className="min-h-screen bg-[#6e6a85] text-[#161319]">
      <Header tone="dark" rightTone="light" logoTone="light" />

      <main>
        {/* Hero — 좌우 50:50 */}
        <section className="grid min-h-screen overflow-hidden bg-[#c6c0d0] pt-[var(--header-h)] lg:h-screen lg:grid-cols-[38.125%_1fr] lg:pt-0">
          {/* 이미지 */}
          <div className="relative min-h-[52vh] overflow-hidden lg:min-h-0">
            <img
              src={brandImg}
              alt="LUNARÉ pink highlighter compact on glass with soft reflected light"
              fetchpriority="high"
              decoding="async"
              className="h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-white/8" aria-hidden="true" />
          </div>

          {/* 텍스트 */}
          <div className="relative flex min-h-[calc(100vh-var(--header-h))] items-center overflow-hidden bg-[#c6c0d0] px-8 py-20 sm:px-14 md:px-20 lg:min-h-0 lg:px-[7vw] lg:py-[10vh]">
            {/* 배경 텍스처 — opacity 낮춤 */}
            <img
              src={brandBg}
              alt=""
              loading="lazy"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover object-center opacity-40 brightness-[1.08] contrast-[1.08] saturate-[1.04]"
              aria-hidden="true"
            />
            {/* 텍스트 가독성 레이어 */}
            <div
              className="absolute inset-0 bg-[#c6c0d0]/50"
              aria-hidden="true"
            />
            <div
              className="absolute left-0 top-0 hidden h-full w-10 bg-[linear-gradient(90deg,rgba(255,255,255,0.18),rgba(255,255,255,0))] lg:block"
              aria-hidden="true"
            />

            <article className="relative z-10 w-full max-w-[600px] translate-y-[20px]">
              <p className="mb-6 font-pretendard text-[9px] font-light uppercase tracking-[0.32em] text-[#4a4460]/70">
                Brand Story
              </p>
              <h1 className="font-didot text-[36px] font-normal leading-none text-[#17141a] sm:text-[44px] lg:text-[52px]">
                Our Story
              </h1>

              <div className="mt-7 space-y-5 font-pretendard text-[14px] font-light leading-[1.9] text-[#2e2b33] sm:text-[15px] lg:mt-8 lg:text-[15px]">
                <p className="text-[15px] font-normal text-[#1e1b22] sm:text-[15.5px]">
                  LUNARÉ는 빛이 피부 위에서 가장 아름답게 표현되는 순간에 집중합니다.
                </p>

                {bodyBlocks.map((block) => (
                  <p key={block} className="whitespace-pre-line">
                    {block}
                  </p>
                ))}

                <p className="border-t border-[#a09ab0]/40 pt-5">
                  LUNARÉ는 단순히 메이크업을 만드는 브랜드가 아닙니다. 빛을 통해 자신만의 아름다움을 발견하고 표현할 수 있도록 돕는 스킨 글로우 뷰티 브랜드입니다.
                </p>
              </div>

              <a
                href="#/shop/all"
                className="mt-8 inline-flex h-[42px] items-center justify-center rounded-[5px] bg-[#17141a] px-8 font-pretendard text-[10px] font-medium uppercase tracking-[0.12em] text-white transition-opacity hover:opacity-75"
              >
                컬렉션 보러가기
              </a>
            </article>
          </div>
        </section>
      </main>

      <Footer compact />
    </div>
  )
}

export default BrandPage
