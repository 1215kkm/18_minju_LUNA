import { useState, useEffect } from 'react'
import Layout from './components/layout/Layout'
import HeroSection from './components/sections/HeroSection'
import Section01 from './components/sections/Section01'
import ItemSection from './components/sections/ItemSection'
import FullTitleSection from './components/sections/FullTitleSection'
import BestCollectionSection from './components/sections/BestCollectionSection'
import ProductDetailPage from './components/pages/ProductDetailPage'
import LoginPage from './components/pages/LoginPage'
import SignupPage from './components/pages/SignupPage'

function App() {
  const [hash, setHash] = useState(window.location.hash)

  useEffect(() => {
    const onHashChange = () => setHash(window.location.hash)
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  if (hash.includes('#/product')) {
    return <ProductDetailPage />
  }

  if (hash === '#/login') {
    return <LoginPage />
  }

  if (hash === '#/signup') {
    return <SignupPage />
  }

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

export default App
