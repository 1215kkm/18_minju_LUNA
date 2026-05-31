import Header from '../layout/Header'
import Footer from '../layout/Footer'
import liquidH01 from '../../assets/images/shop/liquid_h01.png'
import liquidH02 from '../../assets/images/shop/liquid_h02.png'
import liquidH03 from '../../assets/images/shop/liquid_h03.png'
import liquidH04 from '../../assets/images/shop/liquid_h04.png'
import balmH01 from '../../assets/images/shop/balm_h01.png'
import multiB01 from '../../assets/images/shop/multi_b01.png'
import multiB02 from '../../assets/images/shop/multi_b02.png'
import multiB03 from '../../assets/images/shop/multi_b03.png'
import glowB01 from '../../assets/images/shop/glow_b01.png'
import pearlVeilFront from '../../assets/images/sub/pearl-veil-main-front_rbg.png'
import lilacGlowFront from '../../assets/images/sub/lilac-glow-front_rbg.png'
import pinkAuraFront from '../../assets/images/sub/pink-aura-front_rbg.png'
import blueHazeFront from '../../assets/images/sub/blue-haze-front_rbg.png'
import subHero from '../../assets/images/sub/sub_hero.png'

const categories = [
  { label: 'New', path: '#/shop/new', key: 'new' },
  { label: 'Best Sellers', path: '#/shop/best-sellers', key: 'best-sellers' },
  { label: 'All Products', path: '#/shop/all', key: 'all' },
  { label: 'Liquid', path: '#/shop/liquid', key: 'liquid' },
  { label: 'Balm', path: '#/shop/balm', key: 'balm' },
]

const products = [
  {
    id: 'prism-drop',
    name: 'Prism Drop',
    nameKo: '프리즘 드롭',
    category: 'Liquid Highlighter',
    price: '$24',
    image: liquidH01,
    groups: ['all', 'liquid', 'best-sellers'],
  },
  {
    id: 'pearl-fluid',
    name: 'Pearl Fluid',
    nameKo: '펄 플루이드',
    category: 'Liquid Highlighter',
    price: '$24',
    image: liquidH02,
    groups: ['all', 'liquid'],
  },
  {
    id: 'dewy-orbit',
    name: 'Dewy Orbit',
    nameKo: '듀이 오빗',
    category: 'Liquid Highlighter',
    price: '$24',
    image: liquidH03,
    groups: ['all', 'liquid'],
  },
  {
    id: 'moon-fluid',
    name: 'Moon Fluid',
    nameKo: '문 플루이드',
    category: 'Liquid Highlighter',
    price: '$24',
    image: liquidH04,
    groups: ['all', 'liquid'],
  },
  {
    id: 'moon-veil',
    name: 'Moon Veil',
    nameKo: '문 베일',
    category: 'Balm Highlighter',
    price: '$21',
    image: balmH01,
    groups: ['all', 'balm', 'best-sellers'],
  },
  {
    id: 'lilac-glow',
    name: 'Lilac Glow',
    nameKo: '라일락 글로우',
    category: 'Balm Highlighter',
    price: '$22',
    image: lilacGlowFront,
    groups: ['all', 'balm'],
  },
  {
    id: 'pearl-veil',
    name: 'Pearl Veil',
    nameKo: '펄 베일',
    category: 'Balm Highlighter',
    price: '$22',
    image: pearlVeilFront,
    imageClass: 'scale-[1.16] group-hover:scale-[1.19]',
    groups: ['all', 'balm'],
  },
  {
    id: 'pink-aura',
    name: 'Pink Aura',
    nameKo: '핑크 오라',
    category: 'Balm Highlighter',
    price: '$22',
    image: pinkAuraFront,
    groups: ['all', 'balm'],
  },
  {
    id: 'blue-haze',
    name: 'Blue Haze',
    nameKo: '블루 헤이즈',
    category: 'Balm Highlighter',
    price: '$22',
    image: blueHazeFront,
    groups: ['all', 'balm'],
  },
  {
    id: 'aura-melt',
    name: 'Aura Melt',
    nameKo: '오라 멜트',
    category: 'Multi Balm',
    price: '$19',
    image: multiB01,
    groups: ['all', 'best-sellers'],
  },
  {
    id: 'soft-orbit',
    name: 'Soft Orbit',
    nameKo: '소프트 오빗',
    category: 'Multi Balm',
    price: '$20',
    image: multiB02,
    groups: ['all'],
  },
  {
    id: 'glow-melt',
    name: 'Glow Melt',
    nameKo: '글로우 멜트',
    category: 'Multi Balm',
    price: '$20',
    image: multiB03,
    groups: ['all'],
  },
  {
    id: 'lucent-veil',
    name: 'Lucent Veil',
    nameKo: '루센트 베일',
    category: 'Base Glow',
    price: '$27',
    image: glowB01,
    groups: ['all', 'best-sellers'],
  },
]

const newProducts = [
  {
    id: 'pearl-veil',
    name: 'Pearl Veil',
    nameKo: '펄 베일',
    category: 'Balm Highlighter',
    price: '$22',
    image: pearlVeilFront,
    imageClass: 'scale-[1.16] group-hover:scale-[1.19]',
  },
  {
    id: 'lilac-glow',
    name: 'Lilac Glow',
    nameKo: '라일락 글로우',
    category: 'Balm Highlighter',
    price: '$22',
    image: lilacGlowFront,
  },
  {
    id: 'pink-aura',
    name: 'Pink Aura',
    nameKo: '핑크 오라',
    category: 'Balm Highlighter',
    price: '$22',
    image: pinkAuraFront,
  },
  {
    id: 'blue-haze',
    name: 'Blue Haze',
    nameKo: '블루 헤이즈',
    category: 'Balm Highlighter',
    price: '$22',
    image: blueHazeFront,
  },
]

const pageCopy = {
  new: {
    eyebrow: 'New In',
    title: 'This week, softly.',
    heading: 'New',
  },
  'best-sellers': {
    eyebrow: 'Best Sellers',
    title: 'Most loved glow.',
    heading: 'Best Sellers',
  },
  all: {
    eyebrow: 'Highlighter Collection',
    title: 'Light, layered softly.',
    heading: 'All Products',
    heroImage: subHero,
  },
  liquid: {
    eyebrow: 'Liquid Highlighter',
    title: 'A fluid veil of light.',
    heading: 'Liquid',
  },
  balm: {
    eyebrow: 'Balm Highlighter',
    title: 'Glow that melts in.',
    heading: 'Balm',
  },
}

function getActivePage() {
  const slug = window.location.hash.replace('#/shop/', '')
  if (slug === '' || slug === '#/shop') return 'all'
  return pageCopy[slug] ? slug : 'all'
}

function getProductsForPage(activePage) {
  if (activePage === 'new') return newProducts
  return products.filter((product) => product.groups.includes(activePage))
}

function CategoryNav({ activePage }) {
  return (
    <nav className="mx-auto grid max-w-[1140px] grid-cols-2 gap-y-7 px-6 pt-[132px] font-pretendard text-[12px] font-light text-[#aaa3b1] md:grid-cols-5 md:px-10 md:pt-[150px]">
      {categories.map((category) => (
        <a
          key={category.key}
          href={category.path}
          className={`relative text-center transition-colors duration-300 hover:text-[#2c2731] ${
            category.key === activePage ? 'text-[#2c2731]' : ''
          }`}
          onClick={() => window.scrollTo(0, 0)}
        >
          {category.key === activePage && (
            <span className="absolute left-1/2 top-[-13px] h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-[#2c2731]" />
          )}
          {category.label}
        </a>
      ))}
    </nav>
  )
}

function BannerPlaceholder({ copy }) {
  return (
    <section className="mx-auto mt-12 max-w-[1280px] px-5 md:px-10">
      <div className="relative flex aspect-[4.8/1] min-h-[145px] items-center overflow-hidden bg-[#e7e4ec] px-8 md:min-h-[170px] md:px-14">
        {copy.heroImage ? (
          <>
            <img
              src={copy.heroImage}
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
              aria-hidden="true"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(24,22,30,0.46),rgba(24,22,30,0.14)_48%,rgba(24,22,30,0.02))]" />
          </>
        ) : (
          <>
            <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(255,255,255,0.58),rgba(255,255,255,0.12)_45%,rgba(111,104,132,0.12))]" />
            <div className="absolute right-[8%] top-1/2 h-[76%] w-[26%] -translate-y-1/2 rounded-full border border-white/45" />
            <div className="absolute right-[20%] top-[18%] h-[50%] w-px rotate-[58deg] bg-white/55" />
          </>
        )}
        <div className="relative max-w-[390px]">
          <p className={`mb-4 font-pretendard text-[10px] font-light uppercase tracking-[0.28em] ${
            copy.heroImage ? 'text-white/70' : 'text-[#8f8799]'
          }`}>
            {copy.eyebrow}
          </p>
          <h1 className={`font-didot text-[32px] font-normal leading-[1.08] md:text-[44px] ${
            copy.heroImage ? 'text-white' : 'text-[#2c2731]'
          }`}>
            {copy.title}
          </h1>
        </div>
      </div>
    </section>
  )
}

function ProductCard({ product }) {
  return (
    <article className="group relative">
      <button
        type="button"
        aria-label={`${product.name} add to cart`}
        className="absolute right-5 top-1 z-10 flex h-8 w-8 items-center justify-center font-pretendard text-[24px] font-light text-[#3d3744] transition-opacity duration-300 hover:opacity-45"
      >
        +
      </button>

      <a href={`#/product/${product.id}`} className="block pt-12">
        <div className="relative mx-auto mb-7 flex h-[252px] w-full max-w-[220px] items-center justify-center overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className={`relative z-10 h-full w-full object-contain drop-shadow-[0_16px_22px_rgba(80,72,96,0.12)] transition-transform duration-700 ${
              product.imageClass ?? 'group-hover:scale-[1.035]'
            }`}
          />
        </div>

        <div className="text-center">
          <p className="font-pretendard text-[11px] font-light uppercase tracking-[0.16em] text-[#2d2832]">
            {product.name}
          </p>
          <p className="mt-2 font-pretendard text-[11px] font-light text-[#8d8596]">{product.nameKo}</p>
          <p className="mt-3 font-pretendard text-[10px] font-light uppercase tracking-[0.12em] text-[#aaa3b1]">
            {product.category}
          </p>
          <p className="mt-3 font-pretendard text-[11px] font-light text-[#2d2832]">{product.price}</p>
        </div>
      </a>
    </article>
  )
}

function HighlighterShopPage() {
  const activePage = getActivePage()
  const copy = pageCopy[activePage]
  const visibleProducts = getProductsForPage(activePage)

  return (
    <div className="min-h-screen bg-[#fbfafc] text-[#211f24]">
      <Header tone="light" />
      <main>
        <CategoryNav activePage={activePage} />
        <BannerPlaceholder copy={copy} />

        <section className="mx-auto max-w-[1440px] px-5 pb-24 pt-16 md:px-10 md:pt-20">
          <div className="mb-14 grid grid-cols-[1fr_auto_1fr] items-center font-pretendard">
            <button className="justify-self-start text-[12px] font-light text-[#2d2832] transition-opacity hover:opacity-50">
              Filter by ▾
            </button>
            <h2 className="font-didot text-[30px] font-normal text-[#2c2731] md:text-[36px]">
              {copy.heading}
            </h2>
            <button className="justify-self-end text-[12px] font-light text-[#2d2832] transition-opacity hover:opacity-50">
              Sort by ▾
            </button>
          </div>

          <div className="grid grid-cols-2 gap-x-7 gap-y-18 md:grid-cols-4 md:gap-x-9 lg:gap-x-12">
            {visibleProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="pt-20 text-center">
            <button className="font-pretendard text-[12px] font-light text-[#2d2832] underline-offset-4 transition-opacity hover:opacity-50">
              Load more
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default HighlighterShopPage
