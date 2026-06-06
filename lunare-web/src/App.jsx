import { useState, useEffect } from 'react'
import { CartProvider } from './context/CartContext'
import Layout from './components/layout/Layout'
import HeroSection from './components/sections/HeroSection'
import Section01 from './components/sections/Section01'
import ItemSection from './components/sections/ItemSection'
import FullTitleSection from './components/sections/FullTitleSection'
import BestCollectionSection from './components/sections/BestCollectionSection'
import ProductDetailPage from './components/pages/ProductDetailPage'
import LoginPage from './components/pages/LoginPage'
import SignupPage from './components/pages/SignupPage'
import HighlighterShopPage from './components/pages/HighlighterShopPage'
import BrandPage from './components/pages/BrandPage'
import CartPage from './components/pages/CartPage'

function AppRoutes() {
  const [hash, setHash] = useState(window.location.hash)

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }
    const onHashChange = () => setHash(window.location.hash)
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  useEffect(() => {
    // 페이지 라우트(#/...) 또는 메인(빈 hash) 진입 시 스크롤 상단으로
    // 메인 내부 anchor 링크(#about 등)는 영향 없음
    if (hash === '' || hash === '#' || hash.startsWith('#/')) {
      window.scrollTo(0, 0)
      const container = document.querySelector('.snap-container')
      if (container) container.scrollTop = 0
    }
  }, [hash])

  if (hash.includes('#/product')) return <ProductDetailPage />
  if (hash === '#/shop' || hash.startsWith('#/shop/')) return <HighlighterShopPage />
  if (hash === '#/login') return <LoginPage />
  if (hash === '#/signup') return <SignupPage />
  if (hash === '#/brand') return <BrandPage />
  if (hash === '#/cart') return <CartPage />

  return (
    <Layout>
      <HeroSection />
      <Section01 />
      <ItemSection />
      <FullTitleSection />
      <BestCollectionSection />
    </Layout>
  )
}

function App() {
  return (
    <CartProvider>
      <AppRoutes />
    </CartProvider>
  )
}

export default App
