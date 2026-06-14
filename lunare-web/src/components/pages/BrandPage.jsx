import Header from '../layout/Header'
import Footer from '../layout/Footer'
import brandImg from '../../assets/images/brand/brand_img2.webp'

const bodyBlocks = [
  `우리는 화려한 글리터나 과장된 광채가 아닌, 피부 본연의 결을 살리면서 자연스럽게 스며드는 빛을 연구해왔습니다. 달빛이 모든 것을 은은하게 비추듯, LUNARÉ의 제품은 피부 위에 얇고 섬세한 광채를 더해 본연의 아름다움을 더욱 돋보이게 합니다.`,
  `LUNARÉ는 투명한 텍스처와 섬세한 반사광, 피부에 자연스럽게 녹아드는 포뮬러로 새로운 광채의 기준을 제안합니다. 달빛에서 영감을 받은 은은한 반사광, 유리처럼 맑은 윤기, 그리고 피부와 하나가 되는 자연스러운 광채.`,
]

function BrandPage() {
  return (
    <div className="min-h-screen bg-white text-[#17141a]">
      <Header tone="light" />

      <main>
        {/* 1) Hero — 50:50 split, 이미지 우측, 텍스트 좌측 */}
        <section className="grid min-h-screen grid-cols-1 lg:grid-cols-2">
          {/* 이미지 */}
          <div className="relative aspect-[4/5] w-full lg:order-2 lg:aspect-auto lg:h-auto">
            <img
              src={brandImg}
              alt="LUNARÉ campaign portraits — natural luminous skin in soft daylight"
              fetchpriority="high"
              decoding="async"
              className="absolute inset-0 h-full w-full object-contain object-center"
            />
          </div>

          {/* 텍스트 */}
          <div className="flex flex-col justify-center px-8 py-20 pt-[calc(var(--header-h)+6vh)] sm:px-12 sm:py-24 lg:px-[7vw] lg:py-16">
            <p className="mb-6 font-pretendard text-[9px] font-light uppercase tracking-[0.32em] text-[#b0acb8]">
              Brand Story
            </p>
            <h1 className="font-didot text-[28px] font-normal leading-[1.1] tracking-[0.01em] text-[#17141a] sm:text-[36px] lg:text-[44px]">
              Our Story
            </h1>

            <p className="mt-8 max-w-[520px] font-pretendard text-[17px] font-medium leading-[1.75] text-[#1e1b22] sm:text-[18px]">
              LUNARÉ는 빛이 피부 위에서 가장 아름답게 표현되는 순간에 집중합니다.
            </p>

            <div className="mt-6 max-w-[520px] space-y-5 font-pretendard text-[14px] font-light leading-[1.95] text-[#3a3640] sm:text-[14.5px]">
              {bodyBlocks.map((block) => (
                <p key={block}>{block}</p>
              ))}
            </div>

            <p className="mt-8 max-w-[520px] border-t border-[#e8e5ec] pt-6 font-pretendard text-[13px] font-light leading-[1.85] text-[#8a8490] sm:text-[13.5px]">
              LUNARÉ는 단순히 메이크업을 만드는 브랜드가 아닙니다. 빛을 통해 자신만의 아름다움을 발견하고 표현할 수 있도록 돕는 스킨 글로우 뷰티 브랜드입니다.
            </p>

            <a
              href="#/shop/all"
              className="mt-10 inline-flex h-[46px] w-fit items-center justify-center rounded-[5px] bg-[#17141a] px-9 font-pretendard text-[12px] font-medium uppercase tracking-[0.12em] text-white transition-opacity hover:opacity-75"
            >
              컬렉션 보러가기
            </a>
          </div>
        </section>

      </main>

      <Footer compact />
    </div>
  )
}

export default BrandPage
