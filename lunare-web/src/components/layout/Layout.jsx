import Header from './Header'
import Footer from './Footer'

function Layout({ children }) {
  return (
    <>
      <Header />
      <div className="snap-container">
        <main>{children}</main>
        {/* 푸터 — 스냅 포인트로 연결 */}
        <div style={{ scrollSnapAlign: 'start' }}>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default Layout
