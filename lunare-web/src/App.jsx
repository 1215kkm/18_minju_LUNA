import Layout from './components/layout/Layout'
import HeroSection from './components/sections/HeroSection'
import Section01 from './components/sections/Section01'
import ItemSection from './components/sections/ItemSection'
import FullTitleSection from './components/sections/FullTitleSection'
import BestCollectionSection from './components/sections/BestCollectionSection'

function App() {
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
