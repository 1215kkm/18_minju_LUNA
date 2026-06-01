import { useState, useEffect, useRef } from 'react'
import { useCart } from '../../context/CartContext'
import Header from '../layout/Header'
import Footer from '../layout/Footer'
import moonVeilFront from '../../assets/images/shop/balm_h01.webp'
import moonVeilTax from '../../assets/images/sub/Moon Veil_tax.webp'
import moonVeilDetail from '../../assets/images/sub/Moon Veil_detail.webp'
import pearlVeilDetail from '../../assets/images/sub/Pearl Veil_detail.webp'
import lilacGlowDetail from '../../assets/images/sub/Lilac Glow_detail.webp'
import pinkAuraDetail from '../../assets/images/sub/Pink Aura_detail.webp'
import blueHazeDetail from '../../assets/images/sub/Blue Haze_detail.webp'
import pearlVeilMain from '../../assets/images/sub/pearl-veil-main-front_rbg.webp'
import pearlVeilSub from '../../assets/images/sub/pearl-veil-main-generated_rbg.webp'
import pearlVeilParticle from '../../assets/images/sub/pearl-veil-particle-detail.webp'
import pearlVeilTexture from '../../assets/images/sub/pearl-veil-texture_rbg.webp'
import moonVeilTexture from '../../assets/images/sub/Moon Veil_tax_1.png'
import lilacGlowFront from '../../assets/images/sub/lilac-glow-front_rbg.webp'
import lilacGlowSupport from '../../assets/images/sub/lilac-glow-support_rbg.webp'
import lilacGlowParticle from '../../assets/images/sub/lilac-glow-particle-detail.webp'
import lilacGlowTexture from '../../assets/images/sub/lilac-glow-texture_rbg.webp'
import pinkAuraFront from '../../assets/images/sub/pink-aura-front_rbg.webp'
import pinkAuraSupport from '../../assets/images/sub/pink-aura-support_rbg.webp'
import pinkAuraParticle from '../../assets/images/sub/pink-aura-particle-detail-rbg.webp'
import pinkAuraTexture from '../../assets/images/sub/pink-aura-texture_rbg.webp'
import blueHazeFront from '../../assets/images/sub/blue-haze-front_rbg.webp'
import blueHazeSupport from '../../assets/images/sub/blue-haze-support_rbg.webp'
import blueHazeParticle from '../../assets/images/sub/blue-haze-particle-detail-rbg.webp'
import blueHazeTexture from '../../assets/images/sub/blue-haze-texture_rbg.webp'

const products = {
  'moon-veil': {
    slug: 'moon-veil',
    name: 'Moon Veil',
    nameKo: '문 베일',
    weeklyText: '달빛이 부드럽게\n피부 위에 머무는 순간',
    price: '30,000원',
    size: '6.5 g / 0.22 oz',
    shade: '#F0EDF5',
    type: 'Highlighter balm',
    swatches: ['01 Moon', '02 Pearl'],
    description:
      '달빛이 부드럽게 피부 위에 머무는 순간. 투명한 아이보리 펄과 은은한 샴페인 광채가 맑게 겹쳐지는 하이라이터 밤입니다.',
    functions:
      '광대, 콧대, 눈 앞머리, 입술산에 조용한 달빛 광을 더해 피부 결을 맑고 입체적으로 밝혀줍니다.',
    textureText:
      '투명하게 녹는 밤 텍스쳐가 얇게 밀착되어 끈적임 없이 촉촉한 윤기를 남깁니다.',
    howTo:
      '얼굴의 높은 부위에 가볍게 톡톡 얹은 뒤 손끝으로 부드럽게 블렌딩합니다. 더 선명한 광채를 원할 때는 얇게 한 번 더 레이어링하세요.',
    active: ['문스톤 파우더', '샴페인 펄 콤플렉스', '스쿠알란', '화이트 플라워 추출물'],
    finish: '은은하게 맑아지는 문라이트 글로우',
    mood: '차분한 달빛, 투명한 케이스, 깨끗한 아이보리 펄',
    gallery: [
      {
        label: 'Main',
        caption: '정면에서 바라본 투명 케이스와 아이보리 펄 팬의 대표 컷',
        image: moonVeilFront,
      },
      {
        label: 'Detail',
        caption: '고운 샴페인 펄 입자와 촉촉한 소프트 글로우 텍스쳐',
        image: moonVeilTax,
      },
    ],
    textureImage: moonVeilTexture,
    textureImageClass: 'max-w-[440px] lg:max-w-[500px]',
    skinImage: moonVeilDetail,
    cardImage: moonVeilFront,
  },
  'pearl-veil': {
    slug: 'pearl-veil',
    name: 'Pearl Veil',
    nameKo: '펄 베일',
    weeklyText: '달빛이 가장 먼저\n피부에 내려앉는 순간',
    price: '30,000원',
    size: '6.5 g / 0.22 oz',
    shade: '#F0EDF5',
    type: 'Pearl balm',
    swatches: ['01 Pearl', '02 Aura'],
    description:
      '달빛이 가장 먼저 피부에 내려앉는 순간. 투명한 아이보리 펄이 피부 위에 얇게 녹아드는 하이라이터 밤입니다. 과한 반짝임 없이 빛을 조용히 머금어, 달빛이 스친 듯 맑고 촉촉한 광채를 남깁니다.',
    functions:
      '광대, 눈두덩, 입술산, 쇄골 위에 투명한 펄 베일을 더해 은은한 입체감을 완성합니다.',
    textureText:
      '맑은 밤 타입으로 부드럽게 미끄러지듯 발리며, 끈적임 없이 촉촉한 윤기를 남깁니다.',
    howTo:
      '얼굴의 높은 부위에 가볍게 톡톡 얹은 뒤 손끝으로 부드럽게 블렌딩합니다. 더 선명한 광채를 원할 때는 얇게 한 번 더 레이어링하세요.',
    active: ['문스톤 파우더', '바이올렛 펄 콤플렉스', '스쿠알란', '화이트 플라워 추출물'],
    finish: '부드럽게 번지는 소프트 포커스 광채',
    mood: '깨끗한 파우더리 무드, 흰 꽃잎, 차분한 피부 결',
    gallery: [
      {
        label: 'Main',
        caption: '정면에서 바라본 투명 케이스와 아이보리 펄 팬의 대표 컷',
        image: pearlVeilMain,
      },
      {
        label: 'Angle',
        caption: '빛을 받는 투명 케이스의 입체감과 부드러운 광채를 보여주는 보조 컷',
        image: pearlVeilSub,
      },
      {
        label: 'Detail',
        caption: '고운 샴페인 펄 입자와 촉촉한 소프트 글로우 텍스쳐',
        image: pearlVeilParticle,
      },
    ],
    textureImage: pearlVeilTexture,
    textureImageClass: 'max-w-[440px] lg:max-w-[500px]',
    skinImage: pearlVeilDetail,
    cardImage: pearlVeilMain,
    relatedImageClass: 'scale-[1.12]',
  },
  'lilac-glow': {
    slug: 'lilac-glow',
    name: 'Lilac Glow',
    nameKo: '라일락 글로우',
    weeklyText: '차가운 라벤더 빛이\n피부 위에 스며드는 시간',
    price: '35,000원',
    size: '6.5 g / 0.22 oz',
    shade: '#E8E4F2',
    type: 'Light base',
    swatches: ['01 Lilac', '02 Mist'],
    description:
      '차가운 라벤더 빛이 피부 위에 스며드는 시간. 노란기를 차분하게 정리하고 맑은 라일락 펄을 얹어, 피부가 안쪽에서 환하게 켜진 듯한 투명한 베이스 광을 만듭니다.',
    functions:
      '칙칙한 부위, 콧대, 눈 앞머리, 볼 중앙에 라벤더 빛을 더해 피부 톤을 깨끗하고 차분하게 보정합니다.',
    textureText:
      '얇은 파우더 밤이 피부에 가볍게 밀착되어 들뜸 없이 보송하고 은은한 라일락 광을 남깁니다.',
    howTo:
      '베이스 메이크업 후 밝히고 싶은 부위에 가볍게 터치합니다. 넓은 부위에는 손끝으로 얇게 펴 바르고, 포인트 부위에는 한 번 더 얹어주세요.',
    active: ['라벤더 펄 파우더', '클리어 글로우 콤플렉스', '세라마이드', '화이트 루핀 추출물'],
    finish: '차분하게 밝아지는 클린 라일락 글로우',
    mood: '맑은 라벤더 안개, 정돈된 피부 톤, 차가운 달빛',
    gallery: [
      {
        label: 'Main',
        caption: '정면에서 바라본 투명 케이스와 라일락 펄 팬의 대표 컷',
        image: lilacGlowFront,
      },
      {
        label: 'Angle',
        caption: '차가운 라벤더 빛과 투명 케이스의 입체감을 보여주는 보조 컷',
        image: lilacGlowSupport,
      },
      {
        label: 'Detail',
        caption: '고운 라일락 펄 입자가 부드럽게 펼쳐지는 질감 컷',
        image: lilacGlowParticle,
      },
    ],
    textureImage: lilacGlowTexture,
    textureImageClass: 'max-w-[300px]',
    skinImage: lilacGlowDetail,
    cardImage: lilacGlowFront,
  },
  'pink-aura': {
    slug: 'pink-aura',
    name: 'Pink Aura',
    nameKo: '핑크 오라',
    weeklyText: '얼어붙은 오로라처럼\n투명하게 빛나는 핑크',
    price: '27,000원',
    size: '6.5 g / 0.22 oz',
    shade: '#F5E8EF',
    type: 'Soft tint',
    swatches: ['01 Pink', '02 Rose'],
    description:
      '얼어붙은 오로라처럼 투명하게 빛나는 핑크. 맑은 핑크 펄이 혈색을 과하게 올리지 않고 피부 위에 얇은 생기를 더해, 부드럽고 투명한 오라를 남깁니다.',
    functions:
      '볼 중앙, 눈두덩, 입술산에 은은한 핑크빛을 얹어 차분한 혈색과 부드러운 입체감을 동시에 더합니다.',
    textureText:
      '촉촉하게 녹는 소프트 밤 텍스쳐가 얇게 밀착되어 뭉침 없이 맑은 핑크 펄만 남깁니다.',
    howTo:
      '생기가 필요한 부위에 손끝으로 톡톡 얹고 경계를 부드럽게 풀어줍니다. 블러셔 위에 레이어링하면 더 투명한 핑크 광이 살아납니다.',
    active: ['로즈 펄 파우더', '오로라 글로우 콤플렉스', '호호바 오일', '핑크 플라워 추출물'],
    finish: '맑고 촉촉한 소프트 핑크 오라',
    mood: '얼어붙은 장밋빛, 투명한 혈색, 조용한 생기',
    gallery: [
      {
        label: 'Main',
        caption: '정면에서 바라본 투명 케이스와 핑크 펄 팬의 대표 컷',
        image: pinkAuraFront,
      },
      {
        label: 'Angle',
        caption: '빛을 받을 때 살아나는 핑크 오라와 케이스 광택을 보여주는 보조 컷',
        image: pinkAuraSupport,
      },
      {
        label: 'Detail',
        caption: '맑은 핑크 펄 입자와 투명한 오라 색감이 보이는 디테일 컷',
        image: pinkAuraParticle,
      },
    ],
    textureImage: pinkAuraTexture,
    textureImageClass: 'max-w-[300px]',
    skinImage: pinkAuraDetail,
    cardImage: pinkAuraFront,
  },
  'blue-haze': {
    slug: 'blue-haze',
    name: 'Blue Haze',
    nameKo: '블루 헤이즈',
    weeklyText: '새벽 공기의 푸른\n고요한 광채',
    price: '32,000원',
    size: '6.5 g / 0.22 oz',
    shade: '#E4ECF5',
    type: 'Clear highlighter',
    swatches: ['01 Haze', '02 Dew'],
    description:
      '새벽 공기의 푸른 고요한 광채. 옅은 블루 펄이 피부의 붉은 기를 맑게 정돈하고, 차분하고 투명한 수분광처럼 얼굴의 높은 부위를 깨끗하게 밝혀줍니다.',
    functions:
      '콧대, 광대, 눈 밑 삼각존, 쇄골 위에 푸른빛의 투명한 광을 더해 맑고 차분한 인상을 완성합니다.',
    textureText:
      '가볍고 투명한 밤 텍스쳐가 피부 위에서 얇게 녹아, 파우더리하지 않은 맑은 블루 펄만 남깁니다.',
    howTo:
      '차분하게 밝히고 싶은 부위에 소량을 얹어 얇게 펴 바릅니다. 붉은 기가 도는 부위에는 아주 얇게 블렌딩해 맑은 톤으로 정리하세요.',
    active: ['블루 펄 파우더', '아쿠아 글로우 콤플렉스', '판테놀', '블루 로터스 추출물'],
    finish: '맑고 서늘한 클리어 하이라이트',
    mood: '새벽 안개, 차가운 수분감, 투명한 피부 결',
    gallery: [
      {
        label: 'Main',
        caption: '정면에서 바라본 투명 케이스와 블루 펄 팬의 대표 컷',
        image: blueHazeFront,
      },
      {
        label: 'Angle',
        caption: '새벽빛처럼 맑은 블루 펄과 투명 케이스의 보조 컷',
        image: blueHazeSupport,
      },
      {
        label: 'Detail',
        caption: '옅은 블루 펄 입자가 물빛처럼 펼쳐지는 질감 컷',
        image: blueHazeParticle,
      },
    ],
    textureImage: blueHazeTexture,
    textureImageClass: 'max-w-[300px]',
    skinImage: blueHazeDetail,
    cardImage: blueHazeFront,
  },
}

const productList = Object.values(products)
const newItemSlugs = ['pearl-veil', 'lilac-glow', 'pink-aura', 'blue-haze']
const detailSurface = '#f7f4f8'
const detailSurfaceLight = '#fbfafc'
const textureSectionBackgrounds = {
  'moon-veil': '#f7f4f8',
  'pearl-veil': '#f7f4f8',
  'lilac-glow': '#f6f3fa',
  'pink-aura': '#faf4f7',
  'blue-haze': '#f4f7fa',
}

function findProductByPath() {
  const slug = window.location.hash.replace('#/product/', '').split('/')[0]
  return (
    productList.find((product) => product.slug === slug || product.aliases?.includes(slug)) ??
    products['pearl-veil']
  )
}

function ProductGallery({ product }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const paused = useRef(false)
  const activeItem = product.gallery[activeIndex]
  const isDetailCut = activeItem.label === 'Detail'

  useEffect(() => {
    setActiveIndex(0)
  }, [product.slug])

  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused.current) {
        setActiveIndex((prev) => (prev + 1) % product.gallery.length)
      }
    }, 3000)
    return () => clearInterval(interval)
  }, [product.gallery.length])

  return (
    <div
      className="group relative mx-auto flex w-full max-w-[620px] flex-col overflow-hidden rounded-[6px] p-5 md:p-6 lg:mx-0"
      style={{ background: detailSurface }}
      onMouseEnter={() => { paused.current = true }}
      onMouseLeave={() => { paused.current = false }}
    >
      <div
        className="relative z-10 mb-4 flex h-[300px] shrink-0 items-center justify-center overflow-hidden rounded-[3px] lg:h-[335px] xl:h-[360px]"
        style={{ background: detailSurface }}
      >
        <img
          src={activeItem.image}
          alt={product.name}
          fetchpriority="high"
          decoding="async"
          className={`relative z-10 h-full w-full mix-blend-normal transition-transform duration-700 ease-out group-hover:scale-[1.035] ${
            isDetailCut ? 'object-cover' : 'max-h-full max-w-full object-contain'
          }`}
        />
      </div>

      <div className="relative z-10 border-t border-[#ded5e3]/70 pt-3">
        <p className="mb-2 font-pretendard text-[11px] font-light leading-[1.55] text-[#8c8496]">
          {activeItem.caption}
        </p>
        <div className={`grid gap-3 ${product.gallery.length === 2 ? 'grid-cols-2' : 'grid-cols-3'}`}>
          {product.gallery.map((item, index) => (
            <button
              key={item.label}
              type="button"
              aria-label={`${item.label} image`}
              onFocus={() => setActiveIndex(index)}
              onClick={() => setActiveIndex(index)}
              className={`flex aspect-square items-center justify-center overflow-hidden rounded-[4px] border transition-all duration-300 ${
                activeIndex === index
                  ? 'border-[#d8d2dd] opacity-100'
                  : 'border-transparent opacity-60 hover:opacity-100'
              }`}
              style={{ background: item.label === 'Detail' ? 'transparent' : detailSurfaceLight }}
            >
              <img
                src={item.image}
                alt=""
                loading="lazy"
                decoding="async"
                className={`transition-transform duration-500 hover:scale-[1.08] ${
                  item.label === 'Detail'
                    ? 'h-full w-full object-cover'
                    : 'max-h-[72%] max-w-[74%] object-contain'
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

function InfoRow({ label, children }) {
  return (
    <div className="grid grid-cols-[112px_1fr] border-t border-[#ded8e5] py-3.5 text-[12px] leading-[1.65] text-[#5a5562]">
      <dt className="font-pretendard text-[11px] font-medium uppercase tracking-[0.08em] text-[#2d2932]">
        {label}
      </dt>
      <dd className="font-pretendard font-light">{children}</dd>
    </div>
  )
}

function AddedToCartModal({ product, shade, onClose }) {
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-black/30 sm:items-center"
      onClick={onClose}
    >
      <div
        className="w-full max-w-[420px] rounded-t-[12px] bg-[#fbfafc] p-6 sm:rounded-[10px]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-5 flex items-center gap-4">
          <div className="flex h-[64px] w-[64px] shrink-0 items-center justify-center rounded-[6px] bg-[#f7f4f8]">
            <img src={product.cardImage} alt={product.name} className="max-h-[76%] max-w-[70%] object-contain" />
          </div>
          <div>
            <p className="font-pretendard text-[11px] font-light uppercase tracking-[0.22em] text-[#9a93a5]">
              장바구니에 담겼습니다
            </p>
            <p className="mt-1 font-didot text-[20px] font-normal leading-none text-[#2a2630]">{product.name}</p>
            <p className="mt-1.5 font-pretendard text-[12px] font-light text-[#8d8596]">{shade}</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <button
            type="button"
            onClick={onClose}
            className="h-[44px] rounded-[5px] border border-[#ded8e5] font-pretendard text-[11px] font-medium uppercase tracking-[0.08em] text-[#3a3540] transition-colors hover:bg-[#f4f0f8]"
          >
            계속 쇼핑
          </button>
          <a
            href="#/cart"
            onClick={() => { window.scrollTo(0, 0); onClose() }}
            className="flex h-[44px] items-center justify-center rounded-[5px] bg-[#29252d] font-pretendard text-[11px] font-medium uppercase tracking-[0.08em] text-white transition-opacity hover:opacity-80"
          >
            장바구니 보기
          </a>
        </div>
      </div>
    </div>
  )
}

function ProductDetailPage() {
  const [product, setProduct] = useState(() => findProductByPath())
  const [selectedSwatchIndex, setSelectedSwatchIndex] = useState(0)
  const [cartModal, setCartModal] = useState(false)
  const { addItem } = useCart()

  useEffect(() => {
    const onHashChange = () => { setProduct(findProductByPath()); setSelectedSwatchIndex(0) }
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  const handleAddToCart = () => {
    addItem(product, product.swatches[selectedSwatchIndex])
    setCartModal(true)
  }

  const relatedItems = newItemSlugs
    .map((slug) => products[slug])
    .filter((item) => item.slug !== product.slug)

  return (
    <div className="min-h-screen bg-[#fbfafc] text-[#211f24]">
      <Header tone="light" />

      <main className="mx-auto w-full max-w-[1440px] px-5 pb-16 pt-[88px] md:px-8 xl:px-0">
        <section
          id="hero"
          className="mx-auto grid min-h-[calc(100vh-88px)] max-w-[1280px] items-center gap-8 pb-20 lg:grid-cols-[minmax(0,620px)_minmax(430px,560px)] lg:justify-center lg:gap-14"
        >
          <ProductGallery product={product} />

          <div className="w-full max-w-[560px] pt-1">
            <div className="mb-7 flex items-start justify-between gap-8">
              <div>
                <h1 className="font-didot text-[32px] font-normal leading-none tracking-[0.01em] text-[#2a2630] md:text-[36px]">
                  {product.name}
                </h1>
                <p className="mt-2.5 font-pretendard text-[12px] font-light text-[#6d6676]">
                  {product.nameKo}
                </p>
                <p className="mt-3 font-pretendard text-[12px] font-light text-[#9a93a5]">
                  {product.size}
                </p>
              </div>
              <p className="font-pretendard text-[16px] font-medium text-[#2a2630]">{product.price}</p>
            </div>

            <p className="mb-3 whitespace-pre-line font-pretendard text-[12px] font-light leading-[1.6] text-[#9a93a5]">
              {product.weeklyText}
            </p>
            <p className="mb-7 max-w-[560px] font-pretendard text-[13px] font-light leading-[1.7] text-[#4f4958]">
              {product.description}
            </p>

            <div className="mb-7 flex gap-11 font-pretendard text-[12px] text-[#6d6676]">
              {product.swatches.map((swatch, index) => (
                <label key={swatch} className="flex cursor-pointer items-center gap-3" onClick={() => setSelectedSwatchIndex(index)}>
                  <span
                    className={`h-3 w-3 rounded-full border transition-colors ${
                      index === selectedSwatchIndex ? 'border-[#2a2630] bg-[#2a2630]' : 'border-[#bbb2c8] bg-transparent'
                    }`}
                  />
                  {swatch}
                </label>
              ))}
            </div>

            <div className="mb-7 grid grid-cols-2 gap-4">
              <button
                type="button"
                onClick={handleAddToCart}
                className="h-[48px] rounded-[5px] bg-[#29252d] font-pretendard text-[11px] font-medium uppercase tracking-[0.08em] text-white transition-opacity hover:opacity-80"
              >
                Add to cart
              </button>
              <button className="h-[48px] rounded-[5px] border border-[#ded8e5] bg-white/55 font-pretendard text-[11px] font-medium uppercase tracking-[0.08em] text-[#3a3540] transition-colors hover:bg-[#f4f0f8]">
                Add to wishlist
              </button>
            </div>

            <div className="border-b border-[#ded8e5]">
              <InfoRow label="Functions">{product.functions}</InfoRow>
              <InfoRow label="Texture">{product.textureText}</InfoRow>
              <InfoRow label="Delivery">주문 확인 후 영업일 기준 2-4일 이내 출고됩니다.</InfoRow>
            </div>
          </div>
        </section>

        <section className="mx-auto mt-8 max-w-[1240px] overflow-hidden md:mt-12">
          <div className="flex flex-col lg:flex-row">
            <div className="relative w-full shrink-0 overflow-hidden lg:w-[35%]">
              <img
                src={product.skinImage}
                alt={`${product.name} on skin`}
                loading="lazy"
                decoding="async"
                className="aspect-[4/3] h-full w-full object-cover sm:aspect-[3/2] lg:aspect-[3/4] lg:h-auto"
              />
            </div>

            <div
              className="flex w-full flex-col justify-center px-5 py-8 sm:px-8 sm:py-10 lg:px-20 lg:py-16"
              style={{ background: textureSectionBackgrounds[product.slug] ?? detailSurface }}
            >
              <p className="mb-2 font-pretendard text-[10px] font-medium uppercase tracking-[0.18em] text-[#9a93a5]">
                Texture
              </p>
              <p className="mb-6 font-pretendard text-[16px] font-light leading-[1.65] text-[#2d2932] sm:text-[18px] lg:mb-10 lg:max-w-[420px] lg:text-[20px]">
                {product.textureText}
              </p>

              <dl className="w-full lg:max-w-[480px]">
                <div className="pb-8">
                  <dt className="font-pretendard text-[11px] font-medium uppercase tracking-[0.08em] text-[#2d2932]">
                    How to use
                  </dt>
                  <dd className="mt-3 font-pretendard text-[13px] font-light leading-[1.7] text-[#6b6472]">
                    {product.howTo}
                  </dd>
                </div>
                <InfoRow label="Active">
                  {product.active.map((item) => (
                    <span key={item}>
                      {item}
                      <br />
                    </span>
                  ))}
                </InfoRow>
                <InfoRow label="Finish">{product.finish}</InfoRow>
                <InfoRow label="Mood">{product.mood}</InfoRow>
              </dl>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1120px] pt-14">
          <h2 className="mb-3 font-didot text-[26px] font-normal leading-none text-[#2a2630] md:text-[30px]">
            See also
          </h2>
          <div className="grid gap-x-7 gap-y-8 md:grid-cols-3">
            {relatedItems.map((item) => (
              <a
                key={item.slug}
                href={`#/product/${item.slug}`}
                onClick={() => window.scrollTo(0, 0)}
                className="group"
              >
                <div
                  className="mb-3 flex h-[150px] items-center justify-center"
                  style={{ background: detailSurfaceLight }}
                >
                  <img
                    src={item.cardImage}
                    alt={item.name}
                    loading="lazy"
                    decoding="async"
                    className={`h-auto max-h-[76%] w-auto max-w-[46%] object-contain transition-transform duration-700 group-hover:scale-[1.04] ${
                      item.relatedImageClass ?? ''
                    }`}
                  />
                </div>
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <h3 className="font-pretendard text-[14px] font-light text-[#2b2730]">{item.name}</h3>
                    <p className="mt-1.5 font-pretendard text-[12px] font-light text-[#8e8798]">{item.type}</p>
                  </div>
                  <p className="font-pretendard text-[12px] font-medium text-[#2b2730]">{item.price}</p>
                </div>
              </a>
            ))}
          </div>
        </section>
      </main>
      <Footer compact />
      {cartModal && (
        <AddedToCartModal
          product={product}
          shade={product.swatches[selectedSwatchIndex]}
          onClose={() => setCartModal(false)}
        />
      )}
    </div>
  )
}

export default ProductDetailPage
